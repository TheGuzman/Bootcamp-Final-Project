import { Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';


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
        document.location.reload()
    }

    function handleDashboard (){
        document.location.href = '/becomeafish'
    }
    function handleMyFishbowls(){
        document.location.href = '/becomeafish/myfishbowls'
    }
    function handleMyAccount(){
        document.location.href = '/becomeafish/myaccount'
    }


    return (
        <Box>
            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='primary'
                variant='outlined'
                sx={{ fontSize: '0.7em' }}
            >
                <Avatar sx={{ width: 40, height: 40, margin:'0em 1em'}}><Icon icon="vs:fish" color='5e8ca8' /></Avatar>
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
                <MenuItem onClick={handleDashboard}><Icon icon="lucide:layout-dashboard" width="30" height="30" sx={{ margin: '0em 1em' }} /> Dashboard</MenuItem>
                <MenuItem onClick={handleMyFishbowls}><Icon icon="mdi:fishbowl-outline" width="30" height="30" sx={{ margin: '0em 1em' }} /> My Fishbowls</MenuItem>
                <MenuItem onClick={handleMyAccount}><Icon icon="ic:sharp-account-circle" width="30" height="30" /> My account</MenuItem>
                <MenuItem onClick={handleLogOut}><LogoutIcon /> Log out</MenuItem>
            </Menu>
        </Box>
    )
}