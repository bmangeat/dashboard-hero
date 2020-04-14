import {app} from 'hyperapp'
import { withLogger } from "@hyperapp/logger"

import '../styles/*.css'
import '../styles/*.scss'

import actions from './actions'
import state from './state'
import view from './components/views/DashboardView'

withLogger(app)(state, actions, view, document.body)
