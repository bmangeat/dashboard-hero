import {h} from 'hyperapp'

export default (props) =>
    h('header', { }, [
        props.hero.name
    ] )
