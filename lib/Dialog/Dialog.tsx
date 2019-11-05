import React, {Fragment, ReactElement, ReactFragment} from 'react'
import ReactDOM from 'react-dom'

import {scopedClassMaker} from '../helpers/classes'
import Icon from '../Icon/Icon'
import './dialog.scss';

interface DialogProps {
  visible: boolean,
  buttons?: Array<ReactElement>,
  onClose: React.MouseEventHandler,
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('wheel-dialog')
const sc = scopedClass

const Dialog : React.FunctionComponent<DialogProps> = (props: any) => {
  const onclickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    console.log(props.closeOnClickMask)
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };
  const renderContent = (
    props.visible &&
      <Fragment>
        <div className={sc('mask')} onClick={onClickMask}></div>
        <div className={sc('')}>
          <div className={sc('close')} onClick={onclickClose}>
            <Icon name='close' />
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          {
            props.buttons && props.buttons.length > 0 && (
              <footer className={sc('footer')}>
                {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
              </footer>
            )
          }
        </div>
      </Fragment>
  )
  return ReactDOM.createPortal(renderContent, document.body)
}

Dialog.defaultProps = {
  closeOnClickMask: false
}

const modal = (content: ReactFragment, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const handleClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog 
      visible={true}
      buttons={buttons}
      onClose={() => {
        handleClose()
        afterClose && afterClose();
      }}
    >
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  return handleClose
}

const alert = (content: string) => {
  const buttons = <button onClick={() => handleClose()}>ok</button>
  const handleClose = modal(content, [buttons])
}

const confirm = (content: string, yes: () => void, no: () => void) => {
  const onYes = () => {
    handleClose()
    yes && yes()
  }
  const onNo = () => {
    handleClose()
    no && no()
  }
  const buttons =  [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]
  const handleClose = modal(content, buttons, no)
}

export {alert, confirm, modal}
export default Dialog