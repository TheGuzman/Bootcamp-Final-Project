import { Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { ThemeContext } from '../../theming/theme-context';
import { useContext } from 'react';


export default function ProfileAvatar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleLogOut() {
        sessionStorage.removeItem('sesion');
    }

    const currentTheme = useContext(ThemeContext)
    const avatarBgColor = currentTheme[0]!==true?'#C0C0C0':'#696969'

    return (
        <Box>
            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant='outlined'
                sx={{ fontSize: '0.7em' }}
            >
                <Avatar sx={{ width: 40, height: 40, margin:'0em 1em', backgroundColor:`${avatarBgColor}`}} ><Icon icon="vs:fish" color={currentTheme[0]!==true?'#5e8ca8':'#F0BB62'} /></Avatar>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem component={Link} to='/becomeafish'><Icon icon="lucide:layout-dashboard" width="30" height="30" sx={{ margin: '0em 1em' }} /> Dashboard</MenuItem>
                <MenuItem component={Link} to='/becomeafish/myfishbowls'><Icon icon="mdi:fishbowl-outline" width="30" height="30" sx={{ margin: '0em 1em' }} /> My Fishbowls</MenuItem>
                <MenuItem component={Link} to='/becomeafish/myaccount'><Icon icon="ic:sharp-account-circle" width="30" height="30" /> My account</MenuItem>
                <MenuItem onClick={handleLogOut} component={Link} to='/login'><LogoutIcon /> Log out</MenuItem>
            </Menu>
        </Box>
    )
}