import { h } from "hyperapp";

export default (props) =>
    <div class="col-md-2 col-md-offset-0 col-sm-offset-0 col-sm-1 col-xs-offset-1 col-xs-4 full-height vertical-align">
        <select id="list-hero" onchange={props.selectHero}>
            <option>Batman</option>
            <option>Superman</option>
            <option>Joker</option>
            <option>Catwoman</option>
            <option>Jack-Jack</option>
            <option>Harley Quinn</option>
        </select>
    </div>
