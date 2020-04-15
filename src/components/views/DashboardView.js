import {h} from 'hyperapp'

import Header from '../header/HeaderBar'
import Identity from '../info/Identity'

export default (state, actions) => h('div',
    {class: state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
    [
        Header({
            hero: state.hero,
            selectHero: actions.selectHero
        }),
        Identity({
            hero: state.hero
        })

    ])

