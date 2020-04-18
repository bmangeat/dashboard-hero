import {h} from 'hyperapp'
import Header from '../header/HeaderBar'
import Capacities from '../capacities/Capacities'

export default (state, actions) => h('div',
    {id: 'heroWindow', class: state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
    [
        Header({
            hero: state.hero,
            selectHero: actions.selectHero
        }),
        Capacities({
            createCapacitiesChart: (element) => actions.createCapacitiesChart(element)
        })
    ])

