import {Fragment} from "react";
import classes from "./HomePage.module.css";
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return <Fragment>
        <div className={classes.products}>
            <NavLink to='/cigar' className={classes.cigars}>
                <p>Best cigar selection for 2023</p>
            </NavLink>

            <NavLink to='/whiskey' className={classes.whiskeys}>
                <p>High-End Classy Whiskey picks</p>
            </NavLink>
        </div>
    </Fragment>
}

export default HomePage;