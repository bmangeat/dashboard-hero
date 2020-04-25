import Weather from '../weather/Weather'
import { h } from 'hyperapp'
import Todo from '../todo/Todo'

import Header from '../header/Header'
import Identity from '../identity/Identity'
import Capacities from '../capacities/Capacities'
import Loader from '../loader/Loader'
import Footer from '../footer/Footer'

export default (state, actions) =>
    <div id="heroWindow" oncreate={actions.selectHero}>
        <Header
            name={state.hero.name}
            photo={state.hero.image.url}
            selectHero={actions.selectHero}
            color={state.color}
        />
        <div id="board" class="row">
            <div class="col-md-4 col-xs-12">
                <Identity
                    hero={state.hero}
                    color={state.color}
                />
            </div>
            <div class="col-md-4 col-xs-12">
                <Weather
                    weather={state.weather}
                    hero={state.hero}
                />
                <Capacities
                    createCapacitiesChart={(element) => actions.createCapacitiesChart(element)}
                />
            </div>
            <div class="col-md-4 col-xs-12">
                <Todo
                    items={state.todoItems}
                    onToggleDone={(id) => () => actions.toggleDone(id)}
                    onDelete={(id) => () => actions.deleteTodoItem(id)}
                    text={state.addItemInput}
                    onInputChange={actions.updateTodoInput}
                    onAdd={actions.addTodoItem}
                    color={state.color}
                    animation={(element) => {
                        actions.progressBarAnimation(element)
                    }}
                />
            </div>
        </div>
        <Footer/>
        <Loader
            color={state.color}
        />
    </div>
