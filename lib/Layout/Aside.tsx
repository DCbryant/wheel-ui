import React,{FunctionComponent} from 'react';
import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('wheel-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Aside: FunctionComponent<Props> = (props: any) => {
  const {className, ...restProps} = props;
  return (
    <div className={sc('aside', {extra: className})} {...restProps}>aside</div>
  )
}

export default Aside;