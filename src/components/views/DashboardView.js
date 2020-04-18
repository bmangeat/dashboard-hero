import {h} from 'hyperapp'

import Header from '../header/HeaderBar'
import Identity from '../identity/Identity'

export default (state, actions) => h('div',
    {class: 'container-fluid ' + state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
    [
        Header({
            hero: state.hero,
            selectHero: actions.selectHero
        }),
        h('div', {class: 'row'}, [
            Identity({
                hero: state.hero,
            })
        ])

    ])

