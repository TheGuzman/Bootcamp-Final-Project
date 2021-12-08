import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

export function Footer() {

    return (
        <Box sx={{ backgroundColor: 'grey.500'}}>
            <Stack direction='row' spacing={1} sx={{ alignItems: 'baseline', justifyContent:'center' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant='caption'>Fishbowl App 2021</Typography>
                <Typography variant='caption' >All rights reserved</Typography>
            </Stack>
            <Stack direction='row' spacing={1} sx={{ alignItems: 'baseline', justifyContent:'space-around' }}>
                <Typography sx={{ fontSize:'0.6em' ,fontWeight: '400', textDecoration:'underline' }} variant='overline'>terms and conditions</Typography>
                <Typography sx={{ fontSize:'0.6em', fontWeight: '400',textDecoration:'underline' }} variant='overline'>legal</Typography>
                <Typography sx={{ fontSize:'0.6em', fontWeight: '400',textDecoration:'underline' }} variant='overline'>privacy policy</Typography>
            </Stack>
        </Box>

    )
}