import React from 'react'
import { Container } from '@material-ui/core'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';

const App = () => {
const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <BrowserRouter>
        <Container maxWidth='xl' >
          <NavBar />
          <Switch>
           
            <Route path='/' exact component={Home}/>
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
  )
}
export default App