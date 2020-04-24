import {app} from 'hyperapp'
import {withLogger} from '@hyperapp/logger'

import '../styles/*.css'
import '../styles/*.scss'
import '../styles/flexboxgrid.min.css'
import '../styles/global.scss'
import '../styles/sections.scss'
import '../styles/components.scss'
import '../styles/loader.scss'

import actions from './actions'
import state from './state'
import view from './components/views/DashboardView'

withLogger(app)(state, actions, view, document.body)
