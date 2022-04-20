import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './ui/header/Header';
import Main from "./ui/main/Main";
import ModalGreeting from "./ui/modals/modalGreeting/modalGreeting";
import {userLocStor} from "./dal/userLocStor";

function App() {
    const [registrationName, setRegistrationName] = useState('')

    const addNameUser = (name: string) => {
        setRegistrationName(name)
        userLocStor.setUser('user', name)
    };


    const getUserName =  () => {
        const name =  userLocStor.getUser()
        if (name) {
            setRegistrationName(name)
        }
    }
    useEffect(() => {
        getUserName()
    }, [])

    return (
        <div className="App">
            <Header name={registrationName}/>
            <Main/>
            {registrationName == '' ? <ModalGreeting setUser={addNameUser}/> : null}
        </div>
    );
}

export default App;
