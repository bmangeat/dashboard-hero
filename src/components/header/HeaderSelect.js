import {h} from 'hyperapp'

export default (props) =>
    h('div', {class:'col-md-2 col-md-offset-0 col-sm-offset-0 col-sm-1 col-xs-offset-1 col-xs-4 full-height vertical-align'}, [

        h('select', {id: 'list-hero', onchange: props.selectHero}, [
            h('option', {}, ['Batman']),
            h('option', {}, ['Superman']),
            h('option', {}, ['Joker']),
            h('option', {}, ['Catwoman']),
            h('option', {}, ['Jack-Jack']),
            h('option', {}, ['Harley Quinn']),
        ])
    ])


