import {app} from 'hyperapp'
import {withLogger} from '@hyperapp/logger'

import '../styles/*.css'
import '../styles/*.scss'
import '../styles/flexboxgrid.min.css'
import '../styles/main.scss'
import '../styles/global.scss'
import '../styles/header.scss'
import '../styles/component-identity.scss'
import '../styles/component-capacities.scss'

import actions from './actions'
import state from './state'
import view from './components/views/DashboardView'

withLogger(app)(state, actions, view, document.body)
