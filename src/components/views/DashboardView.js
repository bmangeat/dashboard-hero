import {h} from 'hyperapp'
import Header from '../header/HeaderBar'
import Todo from '../todo/Todo'

export default (state, actions) => h('div',
    {class: state.hero.name.replace(/ .*/, ''), oncreate: () => { actions.selectHero() } },
    [
        Header({
            hero: state.hero,
            selectHero: actions.selectHero
        }),
        Todo({
            items: state.todoItems,
            onToggleDone: (id) => () => actions.toggleDone(id),
            onDelete: (id) => () => actions.deleteTodoItem(id),
            text: state.addItemInput,
            onInputChange: actions.updateTodoInput,
            onAdd: actions.addTodoItem,
            color: state.color,
            animation: actions.progressBarAnimation()
        }),
        
    ])
