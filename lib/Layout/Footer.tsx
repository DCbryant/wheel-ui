import React,{FunctionComponent} from 'react';

import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('wheel-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Footer: FunctionComponent<Props> = (props: any) => {
  const {className, ...restProps} = props;
  return (
    <div className={sc('footer', {extra: className})} {...restProps}>{props.children}</div>
  )
}

export default Footer;