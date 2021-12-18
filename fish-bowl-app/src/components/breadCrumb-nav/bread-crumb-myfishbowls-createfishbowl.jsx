import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';

export default function FishbowlNavCreateFishbowl() {

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
          href = '/becomeafish/myfishbowls'
          fontSize={'1.2em'}
        >
          My fishbowls
        </Link>
        <Link
          underline="hover"
          color="inherit"
          sx={{fontWeight:'bold'}}
          href = '/becomeafish/myfishbowls/createfishbowl'
          fontSize={'1.2em'}
        >
          Create Fishbowl
        </Link>
      </Breadcrumbs>
    </div>
  );
}