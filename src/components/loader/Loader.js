import { h } from 'hyperapp'

export default (props) =>
    <div id="page-loading" style={'background-color:'+props.color+';'}>
        <div class="body-loader">
            <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="base">
                <span></span>
                <div class="face"></div>
            </div>
        </div>
        <span class="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
