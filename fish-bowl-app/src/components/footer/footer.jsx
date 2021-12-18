import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';

export function Footer() {

    const FooterText = styled(Typography)(({ theme })=> ({
        fontSize: '0.6em', fontWeight: '400', textDecoration: 'underline',
        color: theme.common.black
    }))
    




    return (
        <footer>
            <Box backgroundColor='secondary.light'>
                <Stack direction='row' spacing={1} sx={{ alignItems: 'baseline', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant='caption'>Fishbowl App 2021</Typography>
                    <Typography variant='caption' >All rights reserved</Typography>
                </Stack>
                <Stack direction='row' spacing={1} sx={{ alignItems: 'baseline', justifyContent: 'space-around' }}>
                    <FooterText component={Link} variant='overline' to='/cookie-policy'>cookie policy</FooterText>
                    <FooterText component={Link} variant='overline' to='/privacy-policy'>legal</FooterText>
                    <FooterText component={Link} variant='overline' to='/privacy-policy'>privacy policy</FooterText>
                </Stack>
            </Box>
        </footer>

    )
}