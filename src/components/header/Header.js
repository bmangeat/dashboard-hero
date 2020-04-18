import {h} from 'hyperapp'
import HeaderSelect from './HeaderSelect'
import HeaderProfile from "./HeaderProfile"
import HeaderImg from "./HeaderImg"
import HeaderLogo from "./HeaderLogo";

export default (props) =>
    h('header', {class: "row middle-md"}, [
        //props.hero.name
        HeaderLogo,
        HeaderSelect({
            selectHero: props.selectHero
        }),
        HeaderProfile({
            name: props.name,
        }),
        HeaderImg({
            photo: props.photo
        })
    ])

