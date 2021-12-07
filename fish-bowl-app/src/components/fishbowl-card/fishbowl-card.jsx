
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

export default function FishbowlCard(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Stack direction='row' sx={{ alignItems: 'baseline',justifyContent:'center' }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem', }} component="div">Name: </Typography>
                    <Typography variant="button" component="div">{props.info.fishbowlName}</Typography>
                </Stack>
                <Stack direction='row' sx={{ alignItems: 'baseline', }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem', }} color="text.secondary" gutterBottom>Theme: </Typography>
                    <Typography variant="subtitle2" >{props.info.fishbowlTheme}</Typography>
                </Stack>
                <Stack sx={{margin:'0.5em 0em'}}>
                    <Typography variant="subtitle2">Brief description</Typography>
                    <Box border={2} sx={{ borderColor: 'primary.main', padding: '0.5em', borderRadius: '10px' }}>
                        <Typography>{props.info.fishbowlDescription}</Typography>
                    </Box>
                </Stack>
                <Stack direction='row' sx={{ alignItems: 'baseline' }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Date: </Typography>
                    <Typography variant="subtitle2" >{props.info.fishbowlTime}</Typography>
                </Stack>
                {props.fishbowlCreator!==false?<Stack direction='row' sx={{ alignItems: 'baseline' }}>
                    <Typography sx={{ margin: '0em 0.2em 0em 0em', fontSize: '0.9rem' }} color="text.secondary" gutterBottom>Creator: </Typography>
                    <Typography variant="subtitle2" >{props.info?.fishbowlCreator}</Typography>
                </Stack>: ''}
            
            </CardContent>
        </Card>
    )
}

