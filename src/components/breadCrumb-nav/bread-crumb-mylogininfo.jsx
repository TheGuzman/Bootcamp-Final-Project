import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next"

export default function FishbowlNavUpdateLoginInfo() {

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
          href = '/becomeafish/myaccount'
          fontSize={'1.2em'}
        >
          {t("breadCrumb.myAccount")}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href = '/becomeafish/myaccount/logininformation'
          sx={{fontWeight:'bold'}}
          fontSize={'1.2em'}
        >
          {t("breadCrumb.updateLoginInfo")}
        </Link>
      </Breadcrumbs>
    </div>
  );
}