import React from 'react';
import {Menu,ItemMenu} from './styles';
import { CommonLink, Icon } from '../../styles/global';

const Header = ()=>{
    return(
        <Menu>
                <ItemMenu>
                    <CommonLink href='#'><Icon width="19px" height="17px" src='/assets/Icon Branco.png'/></CommonLink>
                </ItemMenu>
                <ItemMenu>
                    <CommonLink href='#'><Icon src='/assets/casa.png'/></CommonLink>
                </ItemMenu>
                <ItemMenu>
                    <CommonLink href='#'><Icon src='/assets/Vector.png'/></CommonLink>
                </ItemMenu>
            
        </Menu>
    );
}






export default Header;