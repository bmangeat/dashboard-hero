import { h } from 'hyperapp'

export default (props) =>
    h('div', { class :'todo-item' }, [
        h('input', { type: 'checkbox', checked: props.done, onchange: props.onToggleDone }),
        h('p', null, [props.text]),
        h('input', {
            type: 'button',
            onclick: props.onDelete,
            // value: 'Delete'
        })
    ])