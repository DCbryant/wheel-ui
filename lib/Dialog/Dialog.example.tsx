import React, {useState} from 'react'

import Dialog, {alert, confirm, modal} from './Dialog'

const DialogExample =  () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  const openModal = () => {
    const close = modal(<h3><button onClick={() => close()}>233333</button></h3>)
  }
  return (
    <div>
      <div style={{position: 'relative', zIndex: 10, border: '1px solid #fff'}}>
        <button onClick={() => setX(!x)}>change</button>
        <Dialog 
          visible={x}
          buttons={
            [
              <button onClick={() => {setX(false)}}>1</button>,
              <button onClick={() => {setX(false)}}>2</button>
            ]
          }
          onClose={() => {setX(false)}}
        >
        </Dialog>
      </div>
      <div style={{position: 'relative', zIndex: 9}}>
        <h1>设置closeOnClickMask</h1>
        <button onClick={() => setY(!y)}>change</button>
        <Dialog
          closeOnClickMask={true}
          visible={y}
          buttons={
            [
              <button onClick={() => {setY(false)}}>3</button>,
              <button onClick={() => {setY(false)}}>4</button>
            ]
          }
          onClose={() => {setY(false)}}
        >
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <button onClick={() => {alert('111')}}>alert</button>
        <button 
          onClick={() => {
            confirm(
              '222',
              () => {},
              () => {}
            )
          }}>
            confirm
        </button>
        <button 
          onClick={() => {
            openModal()
          }}>
            modal
          </button>
      </div>
    </div>
  )
}

export default DialogExample