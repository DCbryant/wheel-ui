import React, { ReactFragment, FormEventHandler, FormEvent, ChangeEvent } from 'react'

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: {FormValue},
  fields: Array<{name: string, label:string, input: {type: string}}>,
  buttons: ReactFragment,
  onSubmit: FormEventHandler,
  onChange: (value: FormValue) => void,
  errors: {[K: string]: string[]}
}

const Form: React.FunctionComponent<Props> = (props) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit(e)
  }
  const formData = props.value;
  const onInputChange = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    const newFormValue = {...formData, [name]: e.target.value}
    props.onChange(newFormValue)
  }
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((field, fieldIndex) => {
        return (
          <div key={fieldIndex}>
            {field.label}
            <input
              type={field.input.type}
              value={formData[field.name]}
              onChange={onInputChange.bind(null, field.name)}
            />
            <div>{props.errors[field.name]}</div>
          </div>
        )
      })}
      <div>
        {props.buttons}
      </div>
    </form>
  )
}

export default Form