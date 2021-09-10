import { Link } from 'react-router-dom';

function MainNavigation() {
    return(
        <header>
            <div>Meetups Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>        
            </nav>
        </header>
    );
} 

export default MainNavigation