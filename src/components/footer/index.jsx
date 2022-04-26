
import LogoImage from '../../assets/logo.png'
import AppApple from '../../assets/app-store.png'
import AppAndroid from '../../assets/google-play.png'

import './footer.scss'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <img src={ LogoImage } alt="Logo" />
                <ul>
                    <li>Home</li>
                    <li>Terms of Use</li>
                    <li>Legal Notices</li>
                    <li>Help</li>
                    <li>Manage Account</li>
                </ul>
                <div className="app-icons">
                    <img src={ AppApple } alt="Apple Store" />
                    <img src={ AppAndroid } alt="Google Play" />
                </div>
                <p className="copyright">
                    Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved.
                </p>
            </div>
        </>
    )
}
