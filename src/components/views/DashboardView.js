import Weather from '../weather/Weather'
import { h } from 'hyperapp'
import Todo from '../todo/Todo'

import Header from '../header/Header'
import Identity from '../identity/Identity'
import Capacities from '../capacities/Capacities'
import Loader from '../loader/Loader'
import Footer from "../footer/Footer";

export default (state, actions) =>
    <div id="heroWindow" class={state.hero.name.replace(/ .*/, '')} oncreate={actions.selectHero}>
        <Header
            name={state.hero.name}
            photo={state.hero.image.url}
            selectHero={actions.selectHero}
            color={state.color}
        />
        <div id="board" class="row">
            <Identity
                hero={state.hero}
                color={state.color}
            />
            <Weather
                weather={state.weather}
                hero={state.hero}
            />
            <Capacities
                createCapacitiesChart={(element) => actions.createCapacitiesChart(element)}
            />
            <Todo
                items={state.todoItems}
                onToggleDone={(id) => () => actions.toggleDone(id)}
                onDelete={(id) => () => actions.deleteTodoItem(id)}
                text={state.addItemInput}
                onInputChange={actions.updateTodoInput}
                onAdd={actions.addTodoItem}
                color={state.color}
                animation={(element) => { actions.progressBarAnimation(element) }}
            />
        </div>
        {Loader({
            color: state.color
        })}
        <Footer/>
    </div>
