import React,{FunctionComponent,ReactElement} from 'react';
import { scopedClassMaker } from '../helpers/classes';
import './layout.scss';
import Aside from './Aside';

const sc = scopedClassMaker('wheel-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Dialog: FunctionComponent<Props> = (props: any) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  //reduce 减少、归并， some也可以实现
  const hasAside = 'length' in children &&
    children.reduce((result, node) => result || node.type === Aside, false)
  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  )
}

export default Dialog;