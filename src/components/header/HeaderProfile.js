import {h} from 'hyperapp'

export default (props) =>

    h('div', {class: 'col-md-offset-4 col-md-3 header-profile full-height vertical-align'}, [
        h('p', {}, ['Bienvenue, ',
            h('strong', {}, [props.name])
        ]),
    ])

