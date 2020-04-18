import {h} from 'hyperapp'

import Header from '../header/Header'
import Identity from '../identity/Identity'
import Loader from "../loader/Loader"

export default (state, actions) => h('div',
    {class: state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
    [
        Header({
            name: state.hero.name,
            photo: state.hero.image.url,
            selectHero: actions.selectHero
        }),
        h('div', {class: 'container-fluid'}, [

            h('div', {class: 'row'}, [
                Identity({
                    hero: state.hero,
                })
            ])
        ]),

     Loader()

    ])

