import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

export const Page = styled('div')({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'paper.main',
    flexDirection: 'column',
})

export const MainContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    height: '20em',
    maxHeight: '20em',
    overflow: 'auto',
    width: '80%',
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '10px',
    paddingBottom: '10px',
    marginTop: '25px',
}))
export const ChatContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}))



export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
})

export const TextArea = styled('input')(({ theme }) => ({
    width: '80%',
    height: '2em',
    borderRadius: '4em',
    marginTop: '0.5em',
    paddingLeft: '10px',
    fontSize: '1.3rem',
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    outline: 'none',
    color: theme.palette.text,
    letterSpacing: '1px',
}))

export const SendButton = styled(Button)(({ theme }) => ({
    variant: 'contained',
    width: '10%',
    height: '2em',
    marginTop: '0.5em',
    borderRadius: '4em',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
}))


export const MyRow = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
})

export const MyMessage = styled('div')(({ theme }) => ({
    width: 'fit-content',
    backgroundColor: theme.palette.primary.light,
    padding: '5px 15px',
    marginRight: '5px',
    textAlign: 'center',
    borderRadius: '4em',
    fontFamily:'RobotoMono'
}))

export const SenderName = styled('p')(({ theme }) => ({
    color: theme.palette.text,
    margin: '0 0.2em',
    textAlign: 'center',
    fontSize: '0.7em',
    
}))

export const PartnerRow = styled(MyRow)({
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
})

export const PartnerMessage = styled('div')(({ theme }) => ({
    width: 'fit-content',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text,
    border: '1px solid lightgray',
    padding: '5px 15px',
    marginLeft: '5px',
    textAlign: 'center',
    borderRadius: '4em',
    fontFamily:'RobotoMono'
}))