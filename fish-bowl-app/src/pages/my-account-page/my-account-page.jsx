import ProfileAvatar from "../../components/profile-avatar/profile-avatar"
import { Stack, Typography } from "@mui/material"

export default function MyAccountPage(){


    

    return(
        <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{margin:'0em 1em'}} variant='h5'>My account</Typography>
        <ProfileAvatar></ProfileAvatar>
    </Stack>
    )
}