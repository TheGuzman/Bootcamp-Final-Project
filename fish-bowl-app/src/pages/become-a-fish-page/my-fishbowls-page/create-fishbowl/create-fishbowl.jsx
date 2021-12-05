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







export default function CreateFishbowlPage() {

    const [value, setValue] = useState(new Date());

    const [t] = useTranslation("global")

    function handleSubmit() {

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
                        <LocalizationProvider dateAdapter={AdapterDateFns}  sx={{width:'100%'}}>
                            <DateTimePicker 
                                renderInput={(props) => <TextField {...props} />}
                               
                                label="Fishbowl Date and Time"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            
                        </LocalizationProvider>
                        {/* <TextField sx={{ width: '100%' }}
                            required
                            id="fishbowlDate"
                            label="Date"
                            name="date"
                            type='datetime'
                        /> */}
                        <Button variant='contained' color='secondary' type='submit'>{t("buttons.send")}</Button>
                    </Box>
                </form >
            </Box>
        </React.Fragment>
    )
}