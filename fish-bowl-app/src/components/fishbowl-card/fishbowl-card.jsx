
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export default function FishbowlCard(props) {

    function handleDelete() {
        let id = props.info._id;
        props.onDeleteFishbowl(id)
    }


    return (
            <Box border={2} sx={{ borderColor: 'primary.main', borderRadius: '10px' }}>
                <Card border={2} sx={{ maxWidth: 230, minWidth: 230, minHeight: 292, height: '100%' }} >
                    {props.deleteButton === true ? <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }} >
                        <Button sx={{ padding: '5', minWidth: '0', }} onClick={handleDelete}>
                            <DeleteForeverIcon sx={{ color: 'contrastText' }} />
                        </Button>
                    </Stack> : ''}

                    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Stack direction='row' sx={{ alignItems: 'baseline', justifyContent: 'center', margin: '0em 0em 2em 0em' }}>
                            <Typography variant="button" component="a" href={`http://localhost:3002/${props.info.roomId}`}>{props.info.name}</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ alignItems: 'baseline', }}>
                            <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem', }} color="text.secondary" gutterBottom>Theme: </Typography>
                            <Typography variant="subtitle2" >{props.info.theme}</Typography>
                        </Stack>
                        <Stack sx={{ margin: '0.5em 0em', }}>
                            <Typography variant="subtitle2">Brief description</Typography>
                            <Box border={2} sx={{ borderColor: 'primary.main', padding: '0.5em', borderRadius: '10px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <Typography variant="subtitle2">{props.info.description}</Typography>
                            </Box>
                        </Stack>
                        <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                            <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Date: </Typography>
                            <Typography variant="subtitle2" >{props.info.time}</Typography>
                        </Stack>
                        {props.fishbowlCreator !== false ? <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                            <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Creator: </Typography>
                            <Typography variant="subtitle2" >{props.info?.creator}</Typography>
                        </Stack> : ''}

                    </CardContent>
                </Card>
            </Box>
    )
}

