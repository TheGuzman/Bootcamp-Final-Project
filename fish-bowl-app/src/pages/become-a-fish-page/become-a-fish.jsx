import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import ProfileAvatar from '../../components/profile-avatar/profile-avatar.jsx'
import FishbowlNav from '../../components/breadCrumb-nav/bread-crumb-nav.jsx';

export default function BecomeaFishPage() {


    return (
        <Box>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{margin:'0em 1em'}} variant='h5'>Welcome</Typography>
                <ProfileAvatar></ProfileAvatar>
            </Stack>
            <Box>
            <Stack direction='column' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{margin:'0em 1em'}} variant='h6'>Explore the most popular Fihsbowls</Typography>
                <Box border={2} sx={{ borderColor:'primary.main', padding:'0.5em', borderRadius:'10px'}}>
                    <p>Fishbowl 1</p>
                    <p>Fishbowl 1</p>
                    <p>Fishbowl 1</p>
                    <p>Fishbowl 1</p>
                </Box>
            </Stack>
            </Box>
        </Box>
    )
}




