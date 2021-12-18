import ProfileAvatar from "../../components/profile-avatar/profile-avatar"
import { Stack, Typography, Box } from "@mui/material"
import React from "react"
import { styled } from "@mui/system"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import FishbowlNavAccount from "../../components/breadCrumb-nav/bread-crumb-myaccount";


export default function MyAccountPage() {


    const MyAccountBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        borderRadius: '10px',
        padding: 10,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            width: '35%',
        },
    }))

    const MyAccountMainStack = styled(Stack)(({ theme }) => ({
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2em 0em', gap: '1em',
        [theme.breakpoints.up('md')]: { flexDirection: 'row', margin: '0em 2em', gap: '3em', }
    }))
    const ButtonText = styled(Typography)(({ theme }) => ({
        margin: '0em 1em',
        color:theme.palette.primary.contrastText
    }))



    return (<React.Fragment>
        <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ margin: '0em 1em' }} variant='h5'>My account</Typography>
            <ProfileAvatar></ProfileAvatar>
        </Stack>
        <Stack alignItems={'center'} margin={'1em 0em 2em 0em'}>
            <FishbowlNavAccount></FishbowlNavAccount>
        </Stack>
        <MyAccountMainStack>
            <MyAccountBox component={Link} to='/becomeafish/myaccount/updateuserinfo'>
                <Icon icon="ph:user-list-bold" width="30" height="30" color='#303030'/>
                <ButtonText variant='h6'>Update my info</ButtonText>
            </MyAccountBox>
            <MyAccountBox component={Link} to='/becomeafish/myaccount/deleteuseraccount'>
                <Icon icon="ph:user-minus-bold" width="30" height="30" color='#303030' />
                <ButtonText variant='h6'>Delete my account</ButtonText>
            </MyAccountBox>
        </MyAccountMainStack>
    </React.Fragment>
    )
}