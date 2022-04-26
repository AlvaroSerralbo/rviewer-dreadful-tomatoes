
import './item.scss'

import Icon from '../../assets/icon-calendar.png'

export const Item = ({ images, title, releaseYear, description }) => {
    return (
        <div className="item">
            <div className="item-image">
                <img src={ images['Poster Art'].url } alt={ title } loading="eager"/>
            </div>
            <div className="item-info">
                <div className="item-title">
                    <h4>
                        { title }
                    </h4>
                </div>
                <span className="item-year">
                    <img src={ Icon } alt="Release" />
                    { releaseYear }
                </span>
                <p className="item-description">
                    { description }
                </p>
            </div>
        </div>
    )
}
