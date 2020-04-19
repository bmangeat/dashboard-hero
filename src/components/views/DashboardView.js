import {h} from 'hyperapp'
import Header from '../header/HeaderBar'
import TodoList from '../todo/TodoList'
import TodoItemInput from '../todo/TodoItemInput'
import Todo from '../todo/Todo'

export default (state, actions) => h('div',
    {class: state.hero.name.replace(/ .*/, ''), oncreate: () => { actions.selectHero(), actions.fetchTodos() }, },
    [
        Header({
            hero: state.hero,
            selectHero: actions.selectHero
        }),
        Todo({
            items: state.todoItems,
            onToggleDone: (id) => () => actions.toggleDone(id),
            text: state.addItemInput,
            onInputChange: actions.updateTodoInput,
            onAdd: actions.addTodoItem
        })
        
    ])

