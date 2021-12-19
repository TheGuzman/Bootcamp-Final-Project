import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useTranslation } from "react-i18next"
import { styled } from '@mui/material/styles';
import Fishes from '../../assets/imgs/Fische.freigestellt.png'

export default function HomePage() {
    const [t] = useTranslation("global")

    const QuestionTitle = styled(Typography)(({ theme }) => ({
        padding: '0 10px',
        boxShadow: `inset 0px -20px 0px 0px ${theme.palette.secondary.main}`,
        [theme.breakpoints.up('sm')]: { boxShadow: `inset 0px -25px 0px 0px ${theme.palette.secondary.main}`, },
        [theme.breakpoints.up('md')]: { boxShadow: `inset 0px -35px 0px 0px ${theme.palette.secondary.main}`, },
        [theme.breakpoints.up('lg')]: { boxShadow: `inset 0px -40px 0px 0px ${theme.palette.secondary.main}`, },
        [theme.breakpoints.up('xl')]: { boxShadow: `inset 0px -50px 0px 0px ${theme.palette.secondary.main}`, },
    }))

    const SecondaryTittles = styled(Typography)(() => ({
        fontFamily: 'Brainfish', fontSize: '2rem',
        '@media (min-width:768px)': { textAlign: 'center' },
    }))




    return (
        <React.Fragment>
            {/* <Stack direction='column' sx={{ '@media (min-width:768px)': { flexDirection: 'row', gap: '1em' }, }}> */}
            <Stack>

                <Stack direction="column" sx={{ '@media (min-width:768px)': { flexDirection: 'row', gap: 4 }, margin: '2em', alignItems: 'center', justifyContent: 'center' }}>
                    <QuestionTitle variant="h1">{t("homePage.greeting.welcome")}</QuestionTitle>
                    <QuestionTitle sx={{ textAlign: 'center' }} variant="h1">{t("homePage.greeting.preposition")}</QuestionTitle>
                    <QuestionTitle variant="h1">{t("homePage.greeting.fishbowl")}</QuestionTitle>
                </Stack>

                <Stack sx={{ flexDirection: 'column', '@media (min-width:1024px)': { flexDirection: 'row', justifyContent: 'space-around' } }}>
                    <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', '@media (min-width:768px)': { witdh: '40%' }, '@media (min-width:1024px)': { width: '40%' } }}>
                        <SecondaryTittles variant="h3">{t("homePage.questions.whatFishbowl")}</SecondaryTittles>
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>{t("homePage.questions.answerWhatFishbowl")}</Typography>
                    </Stack>
                    <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', '@media (min-width:1024px)': { width: '40%' } }}>
                        <SecondaryTittles variant="h3">{t("homePage.questions.whyCare")}</SecondaryTittles>
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>{t("homePage.questions.answerWhyCare")}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontStyle: "italic" }}>“If you have an apple and I have an apple and we exchange these apples, then you and I will still each have one apple. But if you have an idea and I have an idea and we exchange these ideas, then each of us will have two ideas."</Typography>
                    <Typography variant="caption">-George Bernard Shaw</Typography>
                </Stack>
                <div style={{ backgroundImage: `url(${Fishes})`, backgroundSize: 'contain', height:'20em' }}>
                </div >
            </Stack>

        </React.Fragment>
    )
}

