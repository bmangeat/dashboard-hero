import {h} from 'hyperapp'
import Header from '../header/HeaderBar'

export default (state, actions) => h('div',
    {class: state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
    [
        Header({
            name: state.hero.name,
            photo: state.hero.image.url,
            selectHero: actions.selectHero
        })
    ])

