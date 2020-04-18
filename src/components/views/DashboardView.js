import {h} from 'hyperapp'
import Header from '../header/HeaderBar'
import Weather from '../weather/Weather'

export default (state, actions) => h('div',
{class: 'container-fluid ' + state.hero.name.replace(/ .*/, ''), oncreate: () => actions.selectHero()},
    [
        Header({
            hero: state.hero,
            selectHero: actions.selectHero
        }),
        h('div', {class: 'row'}, [
            Weather({
                weather: state.weather,
                hero: state.hero
            })
        ])
    ])

