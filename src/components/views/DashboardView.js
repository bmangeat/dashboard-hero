import {h} from 'hyperapp'
import Header from '../header/HeaderBar'

export default (state, actions) => h('div',
    {class: state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectChange()},
    [
        Header({
            hero: state.hero,
            selectChange: actions.selectChange
        })
    ])

