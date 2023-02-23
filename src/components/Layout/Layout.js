import {Fragment} from 'react';
import MainHeader from './MainHeader';
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import WhiskeyProducts from "../Shop/WiskeyProducts/WhiskeyProducts";
import CigarProducts from "../Shop/CigarProducts/CigarProducts";

const Layout = (props) => {
    return (
        <Fragment>
            <MainHeader/>
            <main>{props.children}</main>
            <Routes>
                <Route path='*' exact element={<HomePage to='/home' replace/>}/>
                <Route path='/home/*' exact element={<HomePage/>}/>
                <Route path='/cigar' exact element={<CigarProducts/>}/>
                <Route path='/whiskey' exact element={<WhiskeyProducts/>}/>
            </Routes>
        </Fragment>
    );
};

export default Layout;
