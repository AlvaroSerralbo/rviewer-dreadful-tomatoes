import { Link, NavLink, useLocation } from 'react-router-dom'


import LogoImage from '../../assets/logo.png'
import LoginIcon from '../../assets/icon-login.svg'
import MovieIcon from '../../assets/icon-movies.png'
import SeriesIcon from '../../assets/icon-series.png'
import FilterIcon from '../../assets/icon-filter.png'


import './navBar.scss'

export const Navbar = ( props ) => {

    const { pathname } = useLocation();

    const { showFilter, setShowFilter } = props;

    return (
        <>
            <header>
                <nav className="navbar container">
                    <div className="nav-section">
                        <Link to="/">
                            <img 
                                src={ LogoImage } 
                                alt="Logo" 
                                className="logo"
                            />
                        </Link>
                        {
                            !(pathname === '/') && 
                            (
                                <ul>
                                    <NavLink 
                                        to="movies"
                                        className={ ({ isActive }) => isActive ? 'active' : '' }
                                    >
                                        <li className="nav-icon">
                                            <img src={ MovieIcon } alt="Movies" />
                                            Movies
                                        </li>
                                    </NavLink>
                                    <NavLink 
                                        to="series"
                                        className={ ({ isActive }) => isActive ? 'active' : '' }
                                    >
                                        <li className="nav-icon">
                                            <img src={ SeriesIcon } alt="Movies" />
                                            Series
                                        </li>
                                    </NavLink>
                                </ul>
                            )
                        }
                    </div>
                    <div className="nav-section">
                        <ul>
                            {
                                !(pathname === '/') && 
                                (
                                    <li 
                                        className={`nav-icon filter-icon ${ showFilter ? 'active' : '' }`}
                                        onClick={ () => setShowFilter(!showFilter) }
                                    >
                                        <img src={ FilterIcon } alt="Filter" />
                                        Filters
                                    </li>
                                )
                            }
                            <li>
                                <Link 
                                    to="/"
                                    className="logo-button"
                                >
                                    Login
                                    <img src={ LoginIcon } alt="Login Icon" />

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="trial-button"
                                >
                                    Start Your free trial
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
