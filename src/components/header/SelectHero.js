import {h} from 'hyperapp'

export default (props) =>
    h('select', {id: 'list-hero', onchange: props.selectHero}, [
        h('option', {}, ['Superman']),
        h('option', {}, ['Batman'])
    ])


