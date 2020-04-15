import {h} from 'hyperapp'

export default (props) =>
    h('select', {id: 'list', onchange: props.selectChange}, [
        h('option', {}, ['Superman']),
        h('option', {}, ['Batman'])
    ])


