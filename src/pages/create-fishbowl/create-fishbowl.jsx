import React from "react";
import { useTranslation } from "react-i18next"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from "react";
import { Stack } from "@mui/material";
import ProfileAvatar from "../../components/profile-avatar/profile-avatar";
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import FishbowlNavCreateFishbowl from "../../components/breadCrumb-nav/bread-crumb-myfishbowls-createfishbowl";



export default function CreateFishbowlPage() {

    const url = process.env.REACT_APP_URL

    const [value, setValue] = useState(new Date());
    const [isSumbitted, setSubmited] = useState(false)
    const [t] = useTranslation("global")

    function handleSubmit(e) {
        e.preventDefault()
        let fishbowlName = e.target.fishbowlName.value
        let fishbowlTheme = e.target.fishbowlTheme.value;
        let fishbowlDescription = e.target.fishbowlDescription.value;
        let fishbowlDate = value.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});


        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
                "Authorization": sessionStorage.getItem('sesion')
            },
            body: JSON.stringify({
                fishbowlName: fishbowlName,
                fishbowlTheme: fishbowlTheme,
                fishbowlDescription: fishbowlDescription,
                fishbowlDate: fishbowlDate,
                
            }),
        };
        fetch(`${url}/user/becomeafish/myfishbowls/createfishbowl`, options)
            .then(r => {
                r.json()
                if (r.ok) setSubmited(true)
                else setSubmited(false)
            })
            .then(d => console.log(d));


    }

    const SuccessStack = styled(Stack)(({ theme }) => ({
        backgroundColor: theme.palette.success.light,
        padding: 5
    }));


    return (
        <React.Fragment>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ margin: '0em 1em' }} variant='h5'>{t("createFishbowlPage.createAFishbowl")}</Typography>
                <ProfileAvatar></ProfileAvatar>
            </Stack>

            <Stack alignItems={'center'}>
                <FishbowlNavCreateFishbowl></FishbowlNavCreateFishbowl>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
                <Typography sx={{ margin: '1em' }} variant='h6'>{t("createFishbowlPage.addFishbowl")}</Typography>
                <form onSubmit={handleSubmit} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', alignItems: 'center' }}>
                        <TextField sx={{ '@media (min-width:760px)': { width: '30em', gap: '1em', }, }}
                            required
                            // error={isuserEmailValid}
                            name="name"
                            id="fishbowlName"
                            label="Fishbowl name"
                            placeholder="Name"
                        // helperText={isuserEmailValid !== false ? "Please provide a valid email" : ''}
                        />
                        <TextField sx={{ width: '100%' }}
                            required
                            id="fishbowlTheme"
                            label="Theme"
                            name="theme"
                            placeholder="Theme"
                        />
                        <TextField sx={{ width: '100%' }}
                            required
                            id="fishbowlDescription"
                            label="Description"
                            name="description"
                            placeholder="Description"
                        />
                        <Stack sx={{ width: '100%' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    required
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Fishbowl Date and Time"
                                    value={value}
                                    id='datetime'
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Button variant='contained' color='secondary' type='submit'>{t("buttons.submit")}</Button>
                    </Box>
                </form >
            </Box>
            {isSumbitted !== false ?
                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1em' }}>
                    <Stack direction='column' sx={{ width: 'fit-content', borderRadius: '10px', alignItems: 'center' }}>
                        <SuccessStack sx={{ borderRadius: '10px', }} >
                            <Typography sx={{ margin: '0em 1em', fontWeight: 'bold', textAlign:'center' }} variant='button'>{t("createFishbowlPage.fishbowlCreated")}</Typography>
                        </SuccessStack>
                        <Stack direction='row' sx={{margin:'1em', cursor:'pointer', }} >
                            <ArrowBackIosNewIcon ></ArrowBackIosNewIcon>
                            <Typography sx={{textDecoration:'none', color:'text.primary'}} component={Link} to='/becomeafish/myfishbowls' >{t("createFishbowlPage.backToFishbowlsMsg")}</Typography>
                        </Stack>
                    </Stack>

                </Box>



                : ''
            }
        </React.Fragment >
    )
}