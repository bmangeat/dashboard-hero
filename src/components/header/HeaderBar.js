import {h} from 'hyperapp'
import SelectHero from '../header/SelectHero'

export default (props) =>
    h('header', {class: "col-md-12"}, [
        //props.hero.name
        SelectHero(props),
        props.hero.name
    ])

