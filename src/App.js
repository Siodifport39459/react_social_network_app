import React from 'react'
import {Route,Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/Homepage.component';
import Header from './components/Header/Header.component'
import Login from './pages/Login/Login.component'
import SignUp from './pages/Signup/Signup.component'
import FriendsList from './pages/FriendsList/FriendsList.component'
import NamesItems from './components/NamesItems/Names.component';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/friendslist' component={FriendsList}/>
        <Route exact path='/names' component={NamesItems}/>
        </Switch>

      </div>
    );

  }

}

export default App;
