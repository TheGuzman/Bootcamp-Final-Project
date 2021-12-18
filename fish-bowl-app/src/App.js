import React from 'react';
import './App.css';
import MyHeader from './components/header/header';
import MyThemeProvider from './theming/theme-provider.jsx';
import { Stack } from '@mui/material';
import { Footer } from './components/footer/footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/home/home';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';
import MailVerificationPage from './pages/mail-verification/mail-verification';
import PrivateRoute from './components/private-route/private-route';
import BecomeaFishPage from './pages/become-a-fish-page/become-a-fish.jsx'
import MyFishbowlsPage from './pages/my-fishbowls-page/my-fishbowls-page';
import MyAccountPage from './pages/my-account-page/my-account-page';
import CreateFishbowlPage from './pages/create-fishbowl/create-fishbowl';
import DeleteUserInfoPage from './pages/delete-user-info/delete-user-info';
import UpdateUserInfoPage from './pages/update-user-info/update-user-info';
import JoinFishbowlPage from './pages/join-fishbowl/join-fishbowl';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import CookiePolicy from './pages/cookie-policy/cookie-policy'

function App() {

  return (
    <MyThemeProvider>
      <BrowserRouter>
        <Stack sx={{minHeight:'100vh'}}>
          <MyHeader></MyHeader>
          <main className='main'>
          <Switch>
            <PrivateRoute exact path='/becomeafish'>
              <BecomeaFishPage></BecomeaFishPage>
            </PrivateRoute>
            <PrivateRoute exact path='/becomeafish/joinfishbowl/:roomId' >
              <JoinFishbowlPage></JoinFishbowlPage>
            </PrivateRoute>
            <PrivateRoute exact path='/becomeafish/myfishbowls'>
              <MyFishbowlsPage></MyFishbowlsPage>
            </PrivateRoute>
            <PrivateRoute exact path='/becomeafish/myfishbowls/createfishbowl'>
              <CreateFishbowlPage></CreateFishbowlPage>
            </PrivateRoute>
            <PrivateRoute exact path='/becomeafish/myaccount'>
              <MyAccountPage></MyAccountPage>
            </PrivateRoute>
            <PrivateRoute exact path='/becomeafish/myaccount/deleteuseraccount'>
              <DeleteUserInfoPage></DeleteUserInfoPage>
            </PrivateRoute>
            <PrivateRoute exact path='/becomeafish/myaccount/updateuserinfo'>
              <UpdateUserInfoPage></UpdateUserInfoPage>
            </PrivateRoute>
            <Route exact path="/cookie-policy">
              <CookiePolicy></CookiePolicy>
            </Route>
            <Route exact path="/privacy-policy">
              <PrivacyPolicy></PrivacyPolicy>
            </Route>
            <Route exact path="/validate-mail">
              <MailVerificationPage></MailVerificationPage>
            </Route>
            <Route exact path="/register">
              <RegisterPage></RegisterPage>
            </Route>
            <Route exact path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
          </main>
          <Footer sx={{display:'flex', alignItems:'flex-end'}}></Footer>
        </Stack>
      </BrowserRouter >

    </MyThemeProvider >

  );
}

export default App;
