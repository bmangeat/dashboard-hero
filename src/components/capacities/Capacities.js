import {h} from 'hyperapp'

export default (props) =>
    h('section', { class: 'comp-capacities col-md-4 col-sm-12 col-xd-12' }, [
        h('div', {class: 'comp-header'}, ['Capacitées']),
        h('div', {class: 'capacities-body'}, [
            h('canvas', { oncreate: props.createCapacitiesChart }, [])
        ])
        
    ])