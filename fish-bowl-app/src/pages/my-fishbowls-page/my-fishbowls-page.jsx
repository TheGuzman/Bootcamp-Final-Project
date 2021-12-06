import ProfileAvatar from "../../components/profile-avatar/profile-avatar"
import { Stack, Typography } from "@mui/material"
import React from "react"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function MyFishbowlsPage() {

    function handleClick() {
        document.location.href = '/becomeafish/myfishbowls/createfishbowl'
    }

    return (
        <React.Fragment>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ margin: '0em 1em' }} variant='h5'>My fishbowls</Typography>
                <ProfileAvatar></ProfileAvatar>
            </Stack>

            <Stack direction ='row' sx={{ alignItems: 'center'}} >
            <Typography sx={{ margin: '0em 1em' }} variant='h6'>Add a fishbowl</Typography>
                <Fab color="secondary" size="small" aria-label="add">
                    <AddIcon onClick={handleClick} />
                </Fab>
            </Stack>

        </React.Fragment>
    )
}