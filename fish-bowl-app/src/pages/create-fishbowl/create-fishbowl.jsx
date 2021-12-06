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






export default function CreateFishbowlPage() {

    const [value, setValue] = useState(new Date());
    // const [isSumbitted, setSubmited] = useState(false)
    // const [isLoading, setLoading] = useState(true)
    // const [error, setError] = useState(false)

    const [t] = useTranslation("global")

    function handleSubmit(e) {
        e.preventDefault()
        let fishbowlName = e.target.fishbowlName.value
        let fishbowlTheme = e.target.fishbowlTheme.value;
        let fishbowlDescription = e.target.fishbowlDescription.value;
        let fishbowlDate = value.toLocaleString()
        let fishbowlCreator = sessionStorage.getItem('sesion')

        console.log(fishbowlName, fishbowlTheme, fishbowlDescription, fishbowlDate)


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
                fishbowlCreator: fishbowlCreator,
            }),
        };
        fetch("http://localhost:3001/user/becomeafish/myfishbowls/createfishbowl", options)
            .then(r => r.json())
            .then(d => console.log(d));

        // setSubmited(true)

        console.log('valid')

    }


    return (
        <React.Fragment>
            <p>create fishbowl page</p>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
                <Typography sx={{ margin: '1em' }} variant='h5'>Create a Fishbowl</Typography>
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
                        <Button variant='contained' color='secondary' type='submit'>{t("buttons.send")}</Button>
                    </Box>
                </form >
            </Box>
        </React.Fragment>
    )
}