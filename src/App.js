import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import AlgorithmsContainer from "./Components/Algorithms/AlgorithmsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import {initialiseApp} from './Redux/app-reducer'
import Preloader from "./Images/Preloader/Preloader";

const App = (props) => {
    
    useEffect( () => {
    props.initialiseApp()
}, [initialiseApp])


        if (!props.toggle) {
            return <Preloader />
        }

        return (
            <div className='App'>
                <HeaderContainer/>
                <Navbar />
                <Route path='/profile/:userId' render={() => (<ProfileContainer />)}/>
                <Route path='/messages' render={() => (<MessagesContainer />)}/>
                <Route path='/users' render={() => (<UsersContainer />)}/>
                <Route path='/algorithms' render={() => (<AlgorithmsContainer />)}/>
                <Route path='/login' render={() => (<Login />)}/>
            </div>
        );
    }
    

const stateData = (state) => (
    {
        toggle: state.appReducer.toggle
    }
)

export default  connect (stateData, {initialiseApp})(App);
