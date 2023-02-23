import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {NavLink} from "react-router-dom";

const MainHeader = () => {

    return (
        <header className={classes.header}>

            <h1><NavLink style={{textDecoration: 'none', color: 'whitesmoke'}} to='/'>Luxury Men's Shop</NavLink></h1>
            <nav>
                <ul className={classes.nav}>
                    <li>
                        <NavLink style={{textDecoration: 'none', color: 'whitesmoke'}} to='/cigar'>Cigars</NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none', color: 'whitesmoke'}} to='/whiskey'>Whiskey</NavLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
