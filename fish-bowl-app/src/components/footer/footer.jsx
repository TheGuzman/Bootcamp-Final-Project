import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import { useTranslation } from "react-i18next"

export function Footer() {

    const FooterText = styled(Typography)(({ theme })=> ({
        fontSize: '0.6em', fontWeight: '400', textDecoration: 'underline',
        color: theme.common.black
    }))
    
    const [t] = useTranslation("global")



    return (
        <footer>
            <Box backgroundColor='secondary.light'>
                <Stack direction='row' spacing={1} sx={{ alignItems: 'baseline', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant='caption'>Fishbowl App 2021</Typography>
                    <Typography variant='caption' >{t("footer.allRights")}</Typography>
                </Stack>
                <Stack direction='row' spacing={1} sx={{ alignItems: 'baseline', justifyContent: 'space-around' }}>
                    <FooterText component={Link} variant='overline' to='/cookie-policy'>{t("footer.cookies")}</FooterText>
                    <FooterText component={Link} variant='overline' to='/legal-notice'>{t("footer.legal")}</FooterText>
                    <FooterText component={Link} variant='overline' to='/privacy-policy'>{t("footer.privacyPolicy")}</FooterText>
                </Stack>
            </Box>
        </footer>

    )
}