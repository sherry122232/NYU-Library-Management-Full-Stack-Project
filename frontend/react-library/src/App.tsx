import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { HomePage } from './layouts/HomePage/HomePage';

import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { oktaConfig, } from './lib/oktaConfig';
import { OktaAuth,toRelativeUrl} from '@okta/okta-auth-js';
import {Security,LoginCallback, SecureRoute} from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { MessagesPage } from './layouts/MessagesPage/MessagesPage';

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {

  // authentication part 1 , set some params so that later on our routes will know the authentication
  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginUri = async(_oktaAuth: any, originUri: any) => {
    history.replace(toRelativeUrl(originUri || '/', window.location.origin));
  }

  // authentication part 1 - end

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <HomePage />
          </Route>

          <Route path='/search'>
            <SearchBooksPage />
          </Route>

          <Route path='/checkout/:bookId'>
            <BookCheckoutPage />
          </Route>

          <Route path='/reviewList/:bookId'>
            <ReviewListPage />
          </Route>
          
          {/* use router dom securiyu feature, only authenticated user can get to this page*/}
          <Route path='/login/callback' component={LoginCallback} />
           <SecureRoute path='/shelf'><ShelfPage/></SecureRoute>


          <Route path='/login' render={()=><LoginWidget config={oktaConfig}/>
        }/>

        <Route path='/login/callback' component={LoginCallback}/>

        <SecureRoute path='/messages'><MessagesPage/></SecureRoute>
        </Switch>
        
      </div>
      <Footer />
      </Security>
    </div>
  );
}


