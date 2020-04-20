import Weather from '../weather/Weather'
import { h } from 'hyperapp'

import Header from '../header/Header'
import Identity from '../identity/Identity'
import Capacities from '../capacities/Capacities'
import Loader from '../loader/Loader'

export default (state, actions) =>
    <div id="heroWindow" class={state.hero.name.replace(/ .*/, '')} oncreate={actions.selectHero}>
        {Header({
            name: state.hero.name,
            photo: state.hero.image.url,
            selectHero: actions.selectHero
        })}
        <div id="board" class="row">
            {Identity({
                hero: state.hero
            })}
            {Weather({
                weather: state.weather,
                hero: state.hero
            })}
            {Capacities({
                createCapacitiesChart: (element) => actions.createCapacitiesChart(element)
            })}
            {Capacities({
                createCapacitiesChart: (element) => actions.createCapacitiesChart(element)
            })}
        </div>
        {Loader()}
    </div>