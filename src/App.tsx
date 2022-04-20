import React, {useState} from 'react';
import './App.css';
import Header from './ui/header/Header';
import Main from "./ui/main/Main";
import ModalGreeting from "./ui/modals/modalGreeting/modalGreeting";

function App() {
    const [registrationName, setRegistrationName] = useState('')

    const addNameUser = (name: string) => {
        setRegistrationName(name)
    };

  return (
    <div className="App">
            <Header name={registrationName}/>
            <Main/>
        { registrationName == '' ? <ModalGreeting setUser={addNameUser} /> : null }
    </div>
  );
}

export default App;
