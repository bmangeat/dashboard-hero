import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'identity-section'}, [
        h('h3', {}, ['Caractéristiques']),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Genre']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.appearance.gender])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Race']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.appearance.race])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Taille']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.appearance.height])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Poids']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.appearance.weight])
        ])
    ])


