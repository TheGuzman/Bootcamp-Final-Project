import { useEffect, useState } from "react"
import React from "react"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { Stack } from "@mui/material"
import FishbowlNavUpdateLoginInfo from "../../components/breadCrumb-nav/bread-crumb-mylogininfo"

export default function UpdateLoginPage() {

    const [userIsRemembered, setRememeber] = useState(false)
    const [change, setChange] = useState(false)

    const userInfoInLocalStorage = localStorage.getItem('sesion')
    const userInfoInSessionStorage = sessionStorage.getItem('sesion')

    useEffect(() => {

        if (userInfoInLocalStorage !== null && userInfoInLocalStorage === userInfoInSessionStorage) {
            setRememeber(!userIsRemembered)
        }

    }, [change])

    const handleRememberUser = () => {
        localStorage.setItem('sesion', userInfoInSessionStorage)
        setChange(!change)
    }
    const handleForgetUser = () => {
        localStorage.removeItem('sesion')
        setRememeber(!userIsRemembered)
        setChange(!change)
    }


    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} margin={'2em'}>
            <Stack alignItems={'center'} margin={'1em 0em 2em 0em'}>
                <FishbowlNavUpdateLoginInfo></FishbowlNavUpdateLoginInfo>
            </Stack>
            {userIsRemembered &&
                <Stack alignItems={'center'} justifyContent={'center'} >
                    <Typography textAlign={'center'} variant='h5'>You are currently being remembered on this device</Typography>
                    <Button sx={{ width: 'fit-content', margin: '2em' }} variant='contained' color='secondary' onClick={handleForgetUser}>Stop remembering me on this device</Button>
                </Stack>
            }
            {!userIsRemembered &&
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <Typography textAlign={'center'} variant='h5'>You are not being remembered on this device</Typography>
                    <Button sx={{ width: 'fit-content', margin: '2em' }} variant='contained' color='secondary' onClick={handleRememberUser}>Remember me on this device</Button>
                </Stack>
            }
        </Box>
    )
}