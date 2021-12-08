
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function FishbowlCard(props) {

    function handleDelete(){
        let id = props.info._id;
       props.onDeleteFishbowl(id)
    }


    return (
        <Card sx={{ maxWidth: 345}}>
            {props.deleteButton===true? <Stack direction='row' sx={{ alignItems: 'center', justifyContent:'flex-end', position:'relative' }} >
                <Button variant='contained' color='secondary' sx={{ width: '2em', height: '2em', borderRadius: '50%', padding: '0', minWidth: '0', }} onClick={handleDelete}>
                    <HighlightOffIcon />
                </Button>
            </Stack>:''}
           
            <CardContent>
                <Stack direction='row' sx={{ alignItems: 'baseline', justifyContent: 'center' }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem', }} component="div">Name: </Typography>
                    <Typography variant="button" component="div">{props.info.fishbowlName}</Typography>
                </Stack>
                <Stack direction='row' sx={{ alignItems: 'baseline', }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem', }} color="text.secondary" gutterBottom>Theme: </Typography>
                    <Typography variant="subtitle2" >{props.info.fishbowlTheme}</Typography>
                </Stack>
                <Stack sx={{ margin: '0.5em 0em',}}>
                    <Typography variant="subtitle2">Brief description</Typography>
                    <Box border={2} sx={{ borderColor: 'primary.main', padding: '0.5em', borderRadius: '10px', width:'95%',display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
                        <Typography>{props.info.fishbowlDescription}</Typography>
                    </Box>
                </Stack>
                <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Date: </Typography>
                    <Typography variant="subtitle2" >{props.info.fishbowlTime}</Typography>
                </Stack>
                {props.fishbowlCreator !== false ? <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Creator: </Typography>
                    <Typography variant="subtitle2" >{props.info?.fishbowlCreator}</Typography>
                </Stack> : ''}

            </CardContent>
        </Card>
    )
}

