import {FormValue} from './Form'

interface FormRule {
  key: string,
  required?: boolean,
  maxLength?: number,
  minLength?: number,
  pattern?: RegExp,
}


type FormRules = Array<FormRule>

interface FormErrors {
  [K: string]: string[]
}

function isEmpty(value) {
  return value === undefined || value === null || value === ''
}

const Validador = (FormValue: FormValue, rules: FormRules): FormErrors => {
  let errors = {}
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(message)
  }
  rules.map(rule => {
    const value = FormValue[rule.key]
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, '必填')
      }
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      console.log(rule, value)
      addError(rule.key, '太短')
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, '太长')
    }
    if (rule.pattern) {
      if (!rule.pattern.test(value)) {
        addError(rule.key, '格式不正确')
      }
    }
  })
  return errors
}

export default Validador
