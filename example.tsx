import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'

// import IconExample from './lib/Icon/Icon.example'
import DialogExample from './lib/Dialog/Dialog.example'
import LayoutExample from './lib/Layout/Layout.axample'
import IconDemo from './lib/Icon/Icon.demo';
import './lib/index.scss'
import './example.scss'
const logo = require('./logo.png')
import {Aside, Footer, Header, Content, Layout} from './lib/Layout/Layout'

ReactDOM.render((
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className='site-logo'>
          <img width='50' height='50' src={logo} />
          <span>wheel-ui</span>
        </div>
      </Header>
      <Layout>
        <Aside className='site-aside'>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to='/icon'>Icon</NavLink>
            </li>
            <li>
              <NavLink to='/dialog'>Dialog</NavLink>
            </li>
            <li>
              <NavLink to='/layout'>Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className='site-main'>
          <Route path='/icon' component={IconDemo} />
          <Route path='/dialog' component={DialogExample} />
          <Route path='/layout' component={LayoutExample} />
        </Content>
      </Layout>
      <Footer className='site-footer'>
        @dcbryant版权所有
      </Footer>
    </Layout>
  </Router>
), document.getElementById('root'))