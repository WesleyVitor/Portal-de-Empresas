import React from 'react';
import {Menu,ItemMenu} from './styles';
import { CommonLink, Icon } from '../../styles/global';
import { Link } from 'react-router-dom';


const Header = ()=>{
    return(
        <Menu>
                <ItemMenu>
                    <Link to="/" href='#'><Icon width="19px" height="17px" src='/assets/Branco.png'/></Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/list" href='#'><Icon src='/assets/casa.png'/></Link>
                </ItemMenu>
                <ItemMenu>
                    <Link to="/form" href='#'><Icon src='/assets/Vector.png'/></Link>
                </ItemMenu>
            
        </Menu>
    );
}






export default Header;