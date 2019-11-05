import React,{FunctionComponent} from 'react';

import { scopedClassMaker } from '../helpers/classes';

const sc = scopedClassMaker('wheel-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Content: FunctionComponent<Props> = (props: any) => {
  const {className, ...restProps} = props;
  return (
    <div className={sc('content', {extra: className})} {...restProps}>content</div>
  )
}

export default Content;