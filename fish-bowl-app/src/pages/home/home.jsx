import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { Box, height } from "@mui/system"
import React from "react"
import { useTranslation } from "react-i18next"
import { styled } from '@mui/material/styles';
import Fishes from '../../assets/imgs/Fische.freigestellt.png'
import { Button } from "@mui/material"
import { useState } from "react"

export default function HomePage() {

    const [showMore, setShowMore] = useState(false)
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

    const handleShowMore = () => {
        setShowMore(!showMore)

        if (showMore === true) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }

        console.log(showMore)
    }




    return (
        <Stack>

            <Stack direction="column" sx={{ '@media (min-width:768px)': { flexDirection: 'row', gap: 4 }, margin: '2em', alignItems: 'center', justifyContent: 'center' }}>
                <QuestionTitle variant="h1">{t("homePage.greeting.welcome")}</QuestionTitle>
                <QuestionTitle sx={{ textAlign: 'center' }} variant="h1">{t("homePage.greeting.preposition")}</QuestionTitle>
                <QuestionTitle variant="h1">{t("homePage.greeting.fishbowl")}</QuestionTitle>
            </Stack>

            <Stack sx={{ flexDirection: 'column', '@media (min-width:1024px)': { flexDirection: 'row', justifyContent: 'space-around' } }}>
                <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', '@media (min-width:1024px)': { width: '40%', margin:'3em 1em' } }}>
                    <SecondaryTittles variant="h3">{t("homePage.questions.whatFishbowl")}</SecondaryTittles>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>{t("homePage.questions.answerWhatFishbowl")}</Typography>
                </Stack>

                <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', '@media (min-width:1024px)': { width: '40%', margin:'3em 1em' } }}>
                    <SecondaryTittles variant="h3">{t("homePage.questions.whyCare")}</SecondaryTittles>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>{t("homePage.questions.answerWhyCare")}</Typography>
                </Stack>
            </Stack>
            <Stack alignItems={'center'} sx={{ margin: '1em 1em','@media (min-width:768px)':{margin:'3em 1em'} }}>
                <Button variant='contained' onClick={handleShowMore} color='secondary' sx={{ width: '40%', color: 'primary.contrastText', '@media (min-width:768px)': { width:'15%'} }}>{showMore !== true ? 'Know more' : 'Know less'}</Button>
            </Stack>

            <Stack style={{ backgroundImage: `url(${Fishes})`, backgroundSize: 'contain', height:'100%', minHeight: '40em' }} justifyContent={'space-between'}>
                {showMore !== false ?
                    <React.Fragment>
                        <Stack direction="column" sx={{ margin: '4em 1em', alignItems: 'center',backgroundColor: 'background.special' }}>
                            <SecondaryTittles variant="h3">{t("homePage.questions.howWorks")}</SecondaryTittles>
                            <Typography variant="h5" sx={{ textAlign: 'center' }}>{t("homePage.questions.answerHowWorks")}</Typography>
                        </Stack>
                        <Stack direction="column" sx={{ margin: '1em 1em', alignItems: 'center', justifyContent: 'center',backgroundColor: 'background.special' }}>
                            <Typography variant="body" textAlign={'center'} sx={{ fontStyle: "italic" }}>“If you have an apple and I have an apple and we exchange these apples, then you and I will still each have one apple. But if you have an idea and I have an idea and we exchange these ideas, then each of us will have two ideas."</Typography>
                            <Typography variant="caption">-George Bernard Shaw</Typography>
                        </Stack>
                        <Stack alignItems={'center'} sx={{ margin: '1em 1em' }}>
                            <Button variant='contained' onClick={handleShowMore} color='secondary' sx={{ width: '40%', color: 'primary.contrastText','@media (min-width:768px)': { width:'15%'}  }}>{showMore !== true ? 'Know more' : 'Know less'}</Button>
                        </Stack>
                    </React.Fragment>
                    : ''}
            </Stack>

        </Stack>
    )
}


{/* */ }