import { h } from 'hyperapp'

import Header from '../header/Header'
import Identity from '../identity/Identity'
import Capacities from '../capacities/Capacities'
import Loader from '../loader/Loader'

export default (state, actions) =>
    <div id='heroWindow' class={state.hero.name.replace(/ .*/, '')} oncreate={actions.selectHero}>
        {Header({
            name: state.hero.name,
            photo: state.hero.image.url,
            selectHero: actions.selectHero
        })}
        <div class='container-fluid'>
            <div class='row'>
                {Identity({
                    hero: state.hero,
                })}
                {Capacities({
                    createCapacitiesChart: (element) => actions.createCapacitiesChart(element)
                })}
            </div>
        </div>
        {Loader()}
    </div>