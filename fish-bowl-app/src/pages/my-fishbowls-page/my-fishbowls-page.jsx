import ProfileAvatar from "../../components/profile-avatar/profile-avatar"
import { Stack, Typography } from "@mui/material"
import React from "react"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useState } from "react";
import FishbowlCard from "../../components/fishbowl-card/fishbowl-card";

export default function MyFishbowlsPage() {

    const [allFishbowls, setAllFishbowls] = useState([])
    const [change, setChange] = useState(false)


    useEffect(() => {
        fetch("http://localhost:3001/user/becomeafish/myfishbowls/getuserfishbowls", {
            method: 'GET',
            headers: {
                "Authorization": sessionStorage.getItem('sesion')
            }
        })
            .then(r => r.json())
            .then(d => { setAllFishbowls(d); console.log(d) })
    }, [change]);


    const onDeleteFishbowl = fishbowlId =>{ //custom hook for deleting the fishbowl

        fetch(`http://localhost:3001/user/becomeafish/deleteafishbowl/:${fishbowlId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": sessionStorage.getItem('sesion')
            }
        })
            .then(r => r.json())
            .then(d => {console.log(d);setChange(!change)  })

    }





    return (
        <React.Fragment>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ margin: '0em 1em' }} variant='h5'>My fishbowls</Typography>
                <ProfileAvatar></ProfileAvatar>
            </Stack>

            <Stack direction='row' sx={{ alignItems: 'center' }} >
                <Typography sx={{ margin: '0em 1em' }} variant='h6'>Add a fishbowl</Typography>
                <Fab color="secondary" size="small" aria-label="add" component={Link} to='/becomeafish/myfishbowls/createfishbowl'>
                    <AddIcon />
                </Fab>
            </Stack>
            <Stack direction='row' sx={{display:'flex', flexWrap:'wrap', margin:'0.5em', gap:'0.5em', justifyContent:'center'}}>
                {allFishbowls?.map((e, i) => <FishbowlCard onDeleteFishbowl={onDeleteFishbowl} fishbowlCreator={false} deleteButton={true} info={e} key={i}></FishbowlCard>)}
            </Stack>

        </React.Fragment>
    )
}