import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import {scopedClassMaker} from '../helpers/classes';

import './input.scss'

const sc = scopedClassMaker('wheel-input')

interface Props extends InputHTMLAttributes<HTMLElement> {

}

const Input: FunctionComponent<Props> = (props: any) => {
  const {className, ...rest} = props;
  return (
    <input {...rest} className={sc('', {extra: className})} autoComplete='nope' />
  )
}

export default Input

