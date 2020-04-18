import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'identity-section'}, [
        h('h3', {}, ['Occupations et Biographie']),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Base']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.work.base.replace(/,.*/, '')])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Profession']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.work.occupation])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Groupe']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.connections.groupAffiliation])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Proches']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.connections.relatives])
        ]),
        h('div', {class: 'row middle-md identity-subinformation'}, [
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-key'}, ['Lieu de naissance']),
            h('div', {class: 'col-md-6 col-sm-6 col-xs-6 identity-section-value'}, [props.birth])
        ])
    ])


