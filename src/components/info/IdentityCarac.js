import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'caracteristic'}, [
        h('h3', {}, ['Caractéristiques']),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Genre']),
            h('div', {class: 'col-md-6'}, [props.hero.appearance.gender])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Race']),
            h('div', {class: 'col-md-6'}, [props.hero.appearance.race])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Taille']),
            h('div', {class: 'col-md-6'}, [props.hero.appearance.height])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Poids']),
            h('div', {class: 'col-md-6'}, [props.hero.appearance.weight])
        ])
    ])


