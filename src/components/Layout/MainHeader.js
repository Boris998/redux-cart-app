import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";

const MainHeader = () => {

    return (
        <Grid container sx={{background: 'rgba(37,36,36,0.8)', minHeight: '80px', paddingTop: '20px', width: '100%'}}
              flex={1}>
            <Grid item xs={12} sm={3} align={'center'}>
                <NavLink
                    style={{textDecoration: 'none', color: 'whitesmoke', fontSize: '25px'}}
                    to='/'>
                    Luxury Men's Shop
                </NavLink>
            </Grid>
            <Grid item xs={12} sm={3} align={'center'} sx={{ margin: {xs: '20px', sm: '0'}}}>
                <NavLink
                    style={{textDecoration: 'none', color: 'whitesmoke'}}
                    className={classes.active}
                    to='/cigar'>
                    Cigars
                </NavLink>
            </Grid>
            <Grid item xs={12} sm={3} align={'center'} sx={{ margin: {xs: '20px', sm: '0'}}}>
                <NavLink
                    style={{textDecoration: 'none', color: 'whitesmoke'}}
                    className={classes.active}
                    to='/whiskey'>
                    Whiskey
                </NavLink>
            </Grid>
            <Grid item xs={6} sm={3} align={'center'} sx={{ margin: {xs: '0 0 10px 25%', sm: '0'}}}>
                <CartButton/>
            </Grid>
        </Grid>
    );
};

export default MainHeader;
