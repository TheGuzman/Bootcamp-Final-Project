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
            {/* <Stack direction='column' sx={{ '@media (min-width:768px)': { flexDirection: 'row', gap: '1em' }, }}> */}
               <Stack>
                <Stack direction="column" sx={{ '@media (min-width:768px)': { flexDirection: 'row', gap:4}, margin: '2em', alignItems: 'center', justifyContent:'center' }}>
                    <Typography variant="h1">{t("header.greeting.welcome")}</Typography>
                    <Typography variant="h1">{t("header.greeting.preposition")}</Typography>
                    <Typography variant="h1">{t("header.greeting.fishbowl")}</Typography>
                </Stack>
                <Stack sx={{flexDirection:'column', '@media (min-width:1024px)': { flexDirection: 'row', justifyContent:'space-around' }}}>
                    <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', '@media (min-width:768px)': { witdh: '40%' }, '@media (min-width:1024px)': { width: '40%' } }}>
                        <Typography variant="h3" sx={{ fontFamily: 'Brainfish', fontSize: '2rem', '@media (min-width:768px)': { textAlign: 'center' } }}>What is a fishbowl?</Typography>
                        <Typography variant="h5">A safe non discriminatory space for open discussions and for constructing ideas together</Typography>
                    </Stack>
                    <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', '@media (min-width:1024px)': { width: '40%' } }}>
                        <Typography variant="h3" sx={{ fontFamily: 'Brainfish', fontSize: '2rem', '@media (min-width:768px)': { textAlign: 'center' } }}>Why should I care?</Typography>
                        <Typography variant="h5">You will die, your ideas might not</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box>
                <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontStyle: "italic" }}>“Be less curious about people and more curious about ideas."</Typography>
                    <Typography variant="caption">-Marie Curie</Typography>
                    <Typography variant="h6" sx={{ fontStyle: "italic" }}>“No army can withstand the strength of an idea whose time has come"</Typography>
                    <Typography variant="caption">-Victor Hugo</Typography>
                    <Typography variant="h6" sx={{ fontStyle: "italic" }}>“If you have an apple and I have an apple and we exchange these apples, then you and I will still each have one apple. But if you have an idea and I have an idea and we exchange these ideas, then each of us will have two ideas."</Typography>
                    <Typography variant="caption">-George Bernard Shaw</Typography>
                </Stack>
            </Box>




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


        </React.Fragment >
    )
}

