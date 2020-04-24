import { h } from 'hyperapp'

export default (props) =>
    h('div', { class :'todo-item' }, [
        h('input', { type: 'checkbox', checked: props.done, onchange: props.onToggleDone, id:'checkbox'+props.id }),
        h('label', { for:'checkbox'+props.id, style:(props.done ? "background-color:" + props.color : "border: 1px solid #fff") }),
        h('p', null, [props.text]),
        h('input', {
            type: 'button',
            onclick: props.onDelete,
        })
    ])