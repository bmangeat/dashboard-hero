import { h } from 'hyperapp'

export default (color, nb) => {
    const all = []
    for(let i = 0; i < nb; ++i) {
        all.push(
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class={color} cx="12.3" cy="17.6" r="1.4"/>
                <path class={color} d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4l0,0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,12.9,14.6,12.3,14.6z"/>
                <path class={color} d="M12.3,0.3c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S18.9,0.3,12.3,0.3z M12.3,21.3c-5,0-9.1-4.1-9.1-9.1s4.1-9.1,9.1-9.1s9.1,4.1,9.1,9.1S17.3,21.3,12.3,21.3z"/>
            </svg>
        )
    }
    for(let i = 0; i < 5-nb; ++i) {
        all.push(
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class="st4" cx="12.3" cy="17.6" r="1.4"/>
                <path class="st4" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4l0,0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,12.9,14.6,12.3,14.6z"/>
                <path class="st4" d="M12.3,0.3c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S18.9,0.3,12.3,0.3z M12.3,21.3c-5,0-9.1-4.1-9.1-9.1s4.1-9.1,9.1-9.1s9.1,4.1,9.1,9.1S17.3,21.3,12.3,21.3z"/>
            </svg>
        )
    }
    return (
        <div>{all}</div>
    )
}
