import {h} from 'hyperapp'

export default (props) =>
    h('div', {class: 'col-md-1 full-height vertical-align'}, [
        h('div', {class:'img-hero full-height full-width', style: "background-image: url('" + props.photo + "');"}, [

        ]),
    ])
