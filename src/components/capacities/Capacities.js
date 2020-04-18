import {h} from 'hyperapp'

export default (props) =>
    h('div', { id: 'capacitiesChart' }, [
        h('canvas', { oncreate: props.createCapacitiesChart }, [])
    ])