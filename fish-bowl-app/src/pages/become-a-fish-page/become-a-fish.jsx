import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import ProfileAvatar from '../../components/profile-avatar/profile-avatar.jsx'
import { useState, useEffect } from 'react';
import FishbowlCard from '../../components/fishbowl-card/fishbowl-card.jsx'
import Filter from '../../components/filter/filter.jsx';

export default function BecomeaFishPage() {

    const [fishbowlsDDBB, setFishbowlsFromDDBB] = useState([])
    const [allFishbowls, setAllFishbowls] = useState(fishbowlsDDBB) //Need a copy of the original fishbowks from the DDBB
    const [userName, setUserName] = useState('')

    useEffect(() => {
        fetch("http://localhost:3001/user", {
            method: 'GET',
            headers: {
                "Authorization": sessionStorage.getItem('sesion')
            }
        })
            .then(r => r.json())
            .then(d => {
                console.log(d.name); setUserName(d.name)
                fetch("http://localhost:3001/user/becomeafish/getallfishbowls", {
                    method: 'GET',
                    headers: {
                        "Authorization": sessionStorage.getItem('sesion')
                    }
                })
                    .then(r => r.json())
                    .then(d => { setFishbowlsFromDDBB(d); setAllFishbowls(d); console.log(d) })
            })
    }, []);


    const onFilter = filter => {

        const filtered = fishbowlsDDBB.filter(f => (f.description || f.name).toLowerCase().includes(filter))
        setAllFishbowls(filtered)

    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }


    return (
        <Box>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', margin: '1em 0em' }}>
                <Stack direction='row' sx={{ '@media (min-width:320px)': { flexDirection: 'column' }, '@media (min-width:768px)': { flexDirection: 'row' } }}>
                    <Typography sx={{ margin: '0em 0.5em 0em 1em' }} variant='h5'>Welcome</Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', '@media (min-width:320px)': { marginLeft: '1em' }, '@media (min-width:768px)': { marginLeft: '0em' } }}>{userName}</Typography>
                </Stack>
                <ProfileAvatar></ProfileAvatar>
            </Stack>
            <Box>
                <Stack direction='column' sx={{ alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography sx={{ margin: '0em 1em' }} variant='h6'>Explore the most popular Fihsbowls</Typography>
                    <Filter onFilter={onFilter}></Filter>
                    <Box border={2} sx={{ borderColor: 'primary.main', backgroundColor: 'primary.dark', padding: '0.5em', borderRadius: '10px', margin: '1em', width:'90%', minHeight:370 }}>
                        <Stack direction='row' sx={{ display: 'flex', flexWrap: 'wrap', gap: '2em', margin: '1em', alignItems: 'center', justifyContent: 'center'  }}>
                            {allFishbowls?.map((e, i) => <FishbowlCard fishbowlCreator={true} info={e} key={i}></FishbowlCard>)}
                        </Stack>

                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}




