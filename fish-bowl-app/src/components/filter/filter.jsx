import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import { styled } from "@mui/system"

export default function Filter(props) {


function handleChange(e){
    const filterInfo = e.target.value.toLowerCase();
    console.log(filterInfo)
    props.onFilter(filterInfo)
}


// const Container = styled(Paper)(({ theme }) => ({
//     display:'flex',
//     alignItems: 'center', 
//     p: '2px 4px',
//     [theme.breakpoints.up('md')]: { width:'40%'}
// }))


    return (
        <Paper component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', '@media (max-width:320px)':{width:'90%'} }}
  >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <Icon icon="vs:fish" />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find a cool discussion"
                inputProps={{ 'aria-label': 'Find a cool discussion' }}
                name='input'
                onChange={handleChange}
            />
           <IconButton sx={{ p: '10px' }} aria-label="menu">
                <Icon icon="vs:fish" />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
}