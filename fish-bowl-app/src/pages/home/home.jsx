import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useTranslation } from "react-i18next"
import BackgroundImage from '../../assets/imgs/bg.jpeg'


export default function HomePage() {
    const [t] = useTranslation("global")

    return (
        <React.Fragment>
            <Stack direction='row'>
            <Stack direction="column" sx={{ margin: '0em 1em', alignItems: 'baseline' }}>
                <Typography variant="h1">{t("header.fishbowl")}</Typography>
                <Typography variant="h5">{t("header.welcomeMsg")}</Typography>
            </Stack>

            {/* <Box
                component='img'
                height='fit-content'
                width='fit-content'
                sx={{
                    // height: 233,
                    maxHeight: { xs: 300, md:450, lg:700 },
                    maxWidth: { xs: 320, md:500, lg:800 },
                }}
                src={BackgroundImage}
                alt='fishbowl app description'

            /> */}
            </Stack>

        </React.Fragment>
    )
}

