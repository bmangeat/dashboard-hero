import {app} from 'hyperapp'
import {withLogger} from "@hyperapp/logger"
import Chart from 'chart.js';

import '../styles/*.css'
import '../styles/*.scss'
import '../styles/global.scss'

import actions from './actions'
import state from './state'
import view from './components/views/DashboardView'

withLogger(app)(state, actions, view, document.body)
