import { h } from 'hyperapp'

export default (props) =>
    props.hero.work.base === '-' ?
        'Coper City'
        :
        props.hero.work.base.split(';').slice(0, 1).toString().split(',').slice(-1)