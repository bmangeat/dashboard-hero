import { h } from 'hyperapp'

export default (props) =>
    <select class="header-select" id="list-hero" onchange={props.selectHero}>
        <option>Batman</option>
        <option>Superman</option>
        <option>Joker</option>
        <option>Catwoman</option>
        <option>Jack-Jack</option>
        <option>Harley Quinn</option>
    </select>
