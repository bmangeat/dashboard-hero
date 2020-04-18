import {h} from 'hyperapp'

export default (state, actions) =>
    h('div', {id: 'page-loading'}, [

        h('div', {class: 'body-loader'}, [
            h('span', {}, [
                h('span', {}, []),
                h('span', {}, []),
                h('span', {}, []),
                h('span', {}, [])
            ]),
            h('div', {class: 'base'}, [
                h('span', {}, []),
                h('div', {class: 'face'}, []),

            ]),

        ]),
        h('span', {class: 'longfazers'}, [
            h('span', {}, []),
            h('span', {}, []),
            h('span', {}, []),
            h('span', {}, [])
        ])
    ])
