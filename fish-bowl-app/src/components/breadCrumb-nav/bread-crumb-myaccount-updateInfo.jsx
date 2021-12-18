import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';

export default function FishbowlNavAccountUpdateInfo() {

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
          fontSize={'1.2em'}
        >
          My account
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href = '/becomeafish/myaccount/updateuserinfo'
          sx={{fontWeight:'bold'}}
          fontSize={'1.2em'}
        >
          Update my info
        </Link>
      </Breadcrumbs>
    </div>
  );
}