import React from 'react'
import '../icons/wechat.svg'
import '../icons/qq.svg'
import '../icons/aliPay.svg'
// import './importIcons'

import classes from '../helpers/classes';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  console.log(classes('wheel-icon', className))
  return (
    <span>
      <svg className={classes('wheel-icon', className)} {...restProps}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </span>
  )
}

export default Icon