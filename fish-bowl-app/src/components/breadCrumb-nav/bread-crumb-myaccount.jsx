import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';

export default function FishbowlNavAccount() {

const history = useHistory()


  function handleClick(event) {
    event.preventDefault();
    history.push(event.target.pathname)
  }


  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/becomeafish" fontSize={'1.2em'}>
          Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href = '/becomeafish/myaccount'
          sx={{fontWeight:'bold'}}
          fontSize={'1.2em'}
        >
          My account
        </Link>
      </Breadcrumbs>
    </div>
  );
}