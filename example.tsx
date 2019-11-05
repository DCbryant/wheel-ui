import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import IconExample from './lib/Icon/Icon.example'
import DialogExample from './lib/Dialog/Dialog.example'
import LayoutExample from './lib/Layout/Layout.axample';
import './lib/index.scss'

ReactDOM.render((
  <Router>
    <div>
      <header>
        <div className='logo'>
          wheel-ui
        </div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to='/icon'>Icon</Link>
            </li>
            <li>
              <Link to='/dialog'>Dialog</Link>
            </li>
            <li>
              <Link to='/layout'>Layout</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path='/icon' component={IconExample} />
          <Route path='/dialog' component={DialogExample} />
          <Route path='/layout' component={LayoutExample} />
        </main>
      </div>
    </div>
  </Router>
), document.getElementById('root'))