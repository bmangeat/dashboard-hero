import { h } from 'hyperapp'
import Header from '../header/HeaderBar'

export default (state, actions) => h('div',{ oncreate: () => actions.getData(10) },[
    Header({
        hero: state.hero
    })
])
