import React from 'react';
import {Menu,ItemMenu,CommonLink,Icon} from '../styles';

const Header = ()=>{
    return(
        <Menu>
                <ItemMenu>
                    <CommonLink href='#'><Icon src='/assets/Icon Branco.png'/></CommonLink>
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