import React, {Fragment} from 'react';
import Demo from '../../demo';
import IconExample2 from './Icon.example';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./Icon.example.tsx').default}>
        <IconExample2/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;