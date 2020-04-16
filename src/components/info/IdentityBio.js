import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'identity-biography'}, [
        h('h3', {}, ['Occupations et Biographie']),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Base']),
            h('div', {class: 'col-md-6'}, [props.hero.work.base.replace(/,.*/, '')])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Profession']),
            h('div', {class: 'col-md-6'}, [props.hero.work.occupation])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Groupe']),
            h('div', {class: 'col-md-6'}, [props.hero.connections['group-affiliation']])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Proches']),
            h('div', {class: 'col-md-6'}, [props.hero.connections.relatives.replace(/\([^()]*\)/g,'').split(',').slice(0,2)])
        ]),
        h('div', {class: 'row'}, [
            h('div', {class: 'col-md-6'}, ['Lieu de naissance']),
            h('div', {class: 'col-md-6'}, [props.hero.biography['place-of-birth']])
        ])
    ])


