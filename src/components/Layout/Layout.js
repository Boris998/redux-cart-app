import MainHeader from './MainHeader';
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import WhiskeyProducts from "../Shop/WiskeyProducts/WhiskeyProducts";
import CigarProducts from "../Shop/CigarProducts/CigarProducts";

const Layout = (props) => {
    return (
        <div style={{width: "100%"}}>
            <MainHeader/>
            {props.children}
            <Routes>
                <Route path='*' exact element={<HomePage to='/home' replace/>}/>
                <Route path='/home/*' exact element={<HomePage/>}/>
                <Route path='/cigar' exact element={<CigarProducts/>}/>
                <Route path='/whiskey' exact element={<WhiskeyProducts/>}/>
            </Routes>
        </div>
    );
};

export default Layout;
