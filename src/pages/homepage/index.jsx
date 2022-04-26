
import { Link } from "react-router-dom";

import './homepage.scss'

export const HomePage = () => {
    return (
        <>
            <div className="homepage-container">
                <div className="item">
                    <Link to="/movies">
                        <div className='item-bg'></div>
                        <div className="title">
                                <h1>
                                    Movies
                                </h1>
                        </div>
                    </Link>
                </div>
                <div className="item">
                    <Link to="/series">
                        <div className='item-bg'></div>
                        <div className="title">
                            <h1>
                                Series
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
