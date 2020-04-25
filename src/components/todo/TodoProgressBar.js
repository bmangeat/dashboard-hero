import { h } from 'hyperapp'

export default (props) =>
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="350 110 100 400" preserveAspectRatio="xMinYMin meet" class="svg-content" oncreate= {props.animation}>
        <defs>
            <linearGradient id="liquidGrad" x1="557" y1="150" x2="557" y2="546" gradientUnits="userSpaceOnUse">
                <stop offset="0.2" stop-color={props.color}/>
                <stop offset="1" stop-color="#B3B2B1"/>
            </linearGradient>
            <rect id="tube" x="357" y="150" width="86" height="400" rx="43" ry="43"/>
            <clipPath id="liquidMask">
                <use href="#tube" class="liquidMask"/>
            </clipPath>
            <clipPath id="tubeMask">
                <use href="#tube" class="liquidMask"/>
            </clipPath>
            <path id="liquid" d="M757,552v490H357V552c50,0,50,20,100,20s50-20,100-20,50,20,100,20S707,552,757,552Z"/>
            <mask id="gradMask">
                <use href="#liquid" class="liquid" x="0" fill="#FCEFD6"/>
                <use href="#liquid" class="liquid" x="0" fill="#EEE" opacity="0.7"/>
            </mask>
        </defs>
        <g class="whole" transform="translate(0, -40)">
            <use href="#tube" class="tubeBg" fill="#C8D9D3" opacity="0.61"/>       
            <g mask="url(#gradMask)">
                <use href="#tube" fill="url(#liquidGrad)"/>
            </g>
            <line class="tubeShine" x1="371" y1="200" x2="371" y2="443" fill="none" stroke="#FFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="8" opacity="0.21" stroke-dasharray="153 30" stroke-dashoffset="-20"/>
            <g class="measurements" fill="none" stroke="#FCEFD6" stroke-width="3" stroke-linecap="round" opacity="1">
                <line x1="358" y1="196" x2="370" y2="196"/>
                <line x1="358" y1="234" x2="370" y2="234"/>
                <line x1="358" y1="273" x2="370" y2="273"/>
                <line x1="358" y1="311" x2="370" y2="311"/>
                <line x1="358" y1="350" x2="370" y2="350"/>
                <line x1="358" y1="388" x2="370" y2="388"/>
                <line x1="358" y1="426" x2="370" y2="426"/>
                <line x1="358" y1="465" x2="370" y2="465"/>
                <line x1="358" y1="503" x2="370" y2="503"/>
            </g>
        </g>
    </svg>
