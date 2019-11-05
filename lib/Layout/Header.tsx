import React,{FunctionComponent} from 'react';
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('wheel-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Header: FunctionComponent<Props> = (props: any) => {
  const {className, ...restProps} = props;
  return (
    <div className={sc('header', {extra: className})} {...restProps}>{props.children}</div>
  )
}

export default Header;