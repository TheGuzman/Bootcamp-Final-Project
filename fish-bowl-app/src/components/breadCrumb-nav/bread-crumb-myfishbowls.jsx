import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next"

export default function FishbowlNav() {

const history = useHistory()


  function handleClick(event) {
    event.preventDefault();
    history.push(event.target.pathname)
  }
  const [t] = useTranslation("global")

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/becomeafish" fontSize={'1.2em'}>
        {t("breadCrumb.dashboard")}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          sx={{fontWeight:'bold'}}
          href = '/becomeafish/myfishbowls'
          fontSize={'1.2em'}
        >
         {t("breadCrumb.myFishbowls")}
        </Link>
      </Breadcrumbs>
    </div>
  );
}