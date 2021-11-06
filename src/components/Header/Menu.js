import * as React from 'react';

// == COMPONENTS 
import { Menu, MenuItem } from '@mui/material';

const DropdownMenu = ({ isMenuOpen, anchorEl, onClose }) => {
    console.log('isMenuOpen', isMenuOpen);
    const open = Boolean(anchorEl);


    return (
        <Menu
            open={open}
            onClose={onClose}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}
        >
            <MenuItem style={{padding: '0 5em'}}>Articles</MenuItem>
            <MenuItem style={{padding: '0 5em'}}>Portfolio</MenuItem>
        </Menu>
    )
}

export default DropdownMenu;