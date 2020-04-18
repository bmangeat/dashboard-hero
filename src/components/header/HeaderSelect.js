import {h} from 'hyperapp'

export default (props) =>
    h('div', {class:'col-md-2 full-height vertical-align'}, [

        h('select', {id: 'list-hero', onchange: props.selectHero}, [
            h('option', {}, ['Batman']),
            h('option', {}, ['Superman']),
            h('option', {}, ['Joker']),
            h('option', {}, ['Catwoman']),
            h('option', {}, ['Jack-Jack']),
            h('option', {}, ['Harley Quinn']),
        ])
    ])


