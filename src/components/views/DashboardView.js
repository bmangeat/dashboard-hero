import {h} from 'hyperapp'
import Capacities from '../capacities/Capacities'

import Header from '../header/Header'
import Identity from '../identity/Identity'

export default (state, actions) => h('div',
    {id: 'heroWindow', class: state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
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
        ])

        }),
        Capacities({
            createCapacitiesChart: (element) => actions.createCapacitiesChart(element)
        })
    ])

