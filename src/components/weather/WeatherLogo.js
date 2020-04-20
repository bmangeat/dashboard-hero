import { h } from 'hyperapp'

export default (props) =>

    props.weather == 'Clear' ?
        <div class="logo">
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class="st6" cx="12.3" cy="12.3" r="10.5"/>
                <circle class="st7" cx="12.3" cy="17.6" r="1.4"/>
                <path class="st7" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
            </svg>
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
            </svg>
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
            </svg>
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
            </svg>
            <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
            </svg>
        </div>
        :
        props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze' ?
            <div class="logo">
                <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                    <circle class="st6" cx="12.3" cy="12.3" r="10.5"/>
                    <circle class="st7" cx="12.3" cy="17.6" r="1.4"/>
                    <path class="st7" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                </svg>
                <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                    <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                    <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                    <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                </svg>
                <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                    <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                    <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                    <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                </svg>
                <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                    <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                    <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                    <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                </svg>
                <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                    <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                    <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                    <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                </svg>
            </div>
            :
            props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog' ?
                <div class="logo">
                    <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                        <circle class="st6" cx="12.3" cy="12.3" r="10.5"/>
                        <circle class="st7" cx="12.3" cy="17.6" r="1.4"/>
                        <path class="st7" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                    </svg>
                    <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                        <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                        <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                        <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                    </svg>
                    <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                        <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                        <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                        <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                    </svg>
                    <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                        <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                        <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                        <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                    </svg>
                    <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                        <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                        <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                        <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                    </svg>
                </div>
                :
                props.weather === 'Rain' ?
                    <div class="logo">
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st6" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st7" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st7" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                    </div>
                    :
                    <div class="logo">
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st6" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st7" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st7" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                        <svg version="1.1" class="alert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24.5 24.5" style="enable-background:new 0 0 24.5 24.5;">
                            <circle class="st4" cx="12.3" cy="12.3" r="10.5"/>
                            <circle class="st5" cx="12.3" cy="17.6" r="1.4"/>
                            <path class="st5" d="M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"/>
                        </svg>
                    </div>
