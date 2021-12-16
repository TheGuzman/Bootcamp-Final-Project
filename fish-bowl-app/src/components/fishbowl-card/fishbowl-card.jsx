
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Fab } from '@mui/material';
import { useHistory } from 'react-router';
import React from 'react';


export default function FishbowlCard(props) {

    const history = useHistory()

    let id = props.info._id;

    let fishbowlStateColor = '';

    switch (props.info.state) {
        case 'active': fishbowlStateColor = 'green'; break;
        case 'created': fishbowlStateColor = 'grey'; break;
        case 'closed': fishbowlStateColor = 'red'; break;
        default: fishbowlStateColor = ''; break;
    }

    function handleDelete() {
        props.onDeleteFishbowl(id)
    }
    function handleStartStreaming() {
        props.onStartFishbowl(id)
        history.push(`/becomeafish/joinfishbowl/${props.info.roomId}`)

    }


    return (
        <Box border={2} sx={{ borderColor: 'primary.main', borderRadius: '10px' }}>
            <Card border={2} sx={{ maxWidth: 230, minWidth: 230, minHeight: 292, height: '100%' }} >
                {/* If the user prop exists then it means that the user can start and delete fishbowls */}
                {props.deleteButton === true ?
                    <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', position: 'relative' }} >
                        <Button sx={{ padding: '5', minWidth: '0' }} onClick={handleStartStreaming}>
                            <Icon icon="bi:file-play" width="25" height="25" />
                        </Button>
                        <Button sx={{ padding: '5', minWidth: '0', }} onClick={handleDelete}>
                            <DeleteForeverIcon sx={{ color: 'contrastText' }} />
                        </Button>
                    </Stack> : ''}

                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Stack direction='row' sx={{ alignItems: 'baseline', justifyContent: 'center', margin: '0em 0em 2em 0em', position:'relative' }}>
                        {/* if the state of the fishbowl is active then it is avaible to join to other users and the creator will not see the join button (that is why the second condition in ternary operator) */}
                        {props.info.state === 'active' && props.deleteButton !== true ? <React.Fragment><Typography variant="button" sx={{fontWeight:'bold'}} >{props.info.name}</Typography>
                            <Fab size="small" color="secondary" sx={{position:'absolute',bottom:'-5px', right:'-10px'}} component={Link} to={`/becomeafish/joinfishbowl/${props.info.roomId}`} ><Icon icon="bi:person-plus" width="20" height="20" /></Fab>
                        </React.Fragment>
                            :
                            <Typography variant="button" sx={{fontWeight:'bold'}}>{props.info.name}</Typography>
                        }

                    </Stack>
                    <Stack direction='row' sx={{ alignItems: 'baseline', }}>
                        <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem', }} color="text.secondary" gutterBottom>Theme: </Typography>
                        <Typography variant="subtitle2" >{props.info.theme}</Typography>
                    </Stack>
                    <Stack sx={{ margin: '1em 0em', }}>
                        <Typography variant="subtitle2">Brief description</Typography>
                        <Box border={2} sx={{ borderColor: 'primary.main', padding: '0.5em', borderRadius: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Typography variant="subtitle2">{props.info.description}</Typography>
                        </Box>
                    </Stack>
                    <Stack gap={2}>
                        <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                            <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Date: </Typography>
                            <Typography variant="subtitle2" >{props.info.time}</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                            <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Status: </Typography>
                            <Stack direction='row' alignItems='flex-start' gap={1}>
                                <Typography variant="subtitle2" >{props.info.state}</Typography>
                                <Icon icon="gg:radio-checked" width="20" height="20" color={fishbowlStateColor} />
                            </Stack>
                        </Stack>

                        {/* show the creator only in the dashboard page */}
                        {props.fishbowlCreator !== false ? <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                            <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Creator: </Typography>
                            <Typography variant="subtitle2" >{props.info?.creator}</Typography>
                        </Stack> : ''}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

