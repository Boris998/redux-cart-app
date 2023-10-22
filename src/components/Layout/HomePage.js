import classes from "./HomePage.module.css";
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";

const HomePage = () => {
    return <Grid container sx={{
        marginTop: '10vh 0',
        backgroundColor: 'rgba(134, 24, 24, 0.25)',
        fontSize: '30px',
        padding: '10vh 0',
        maxWidth: '100%'
    }}>
        <Grid item xs={6} className={classes.cigars} align={'center'}>
            <NavLink to='/cigar'>
                <p>Best cigar selection for 2023</p>
            </NavLink>
        </Grid>

        <Grid item xs={6} className={classes.whiskeys} align={'center'}>
            <NavLink to='/whiskey'>
                <p>High-End Classy Whiskey picks</p>
            </NavLink>
        </Grid>
    </Grid>;
}

export default HomePage;