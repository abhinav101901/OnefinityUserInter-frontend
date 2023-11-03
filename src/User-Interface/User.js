import React, { useState } from 'react';
// import SpeechToText from '../Speech-text/SpeechToText';
import axios from "axios"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './User.css';

function User() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        state: '',
        district: '',
        village: '',
        panCard: '',
    });

    const [isListening, setIsListening] = useState(false);

    //setFirstName(user)


    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
            axios.post('http://localhost:4000/signup', {...user})
                .then((res) => {
                    alert(`Your Acount Created Succesfully`)
                }).catch((err) => {
                    alert(err.response.data.message + err.response.status + " Error")
                })
        console.log(user)
        // Handle form submission here, e.g., send data to an API
    };

    function toggleListening(input) {
        if (isListening) {
            // stopListening();
            handleinputvoice(input)
            setIsListening(false);
        } else {
            // startListening();
            handlevoiceinitialize(input)
            setIsListening(true);
        }
    };

    const handlevoiceinitialize = (input) => {
        const divtoShow = document.getElementById(input)
        divtoShow.style.visibility = 'visible';
        divtoShow.parentElement.children[3].style.background = '#7cc07f';
        divtoShow.parentElement.children[3].innerHTML = 'STOP Microphone'

        SpeechRecognition.startListening()
        if (input == 'firstName') {
            setUser({ ...user, [input]: '' });
            SpeechRecognition.stopListening()
        }

        if (input == 'lastName') {
            setUser({ ...user, [input]: '' });
        }

        if (input == 'state') {
            setUser({ ...user, [input]: '' });
        }

        if (input == 'district') {
            setUser({ ...user, [input]: '' });
        }

        if (input == 'village') {
            setUser({ ...user, [input]: '' });
        }

        if (input == 'panCard') {
            setUser({ ...user, [input]: '' });
        }
    }

    const handleinputvoice = (input) => {

        if (input == 'firstName') {
            setUser({ ...user, [input]: transcript });
            SpeechRecognition.stopListening()
        }

        if (input == 'lastName') {
            setUser({ ...user, [input]: transcript });
            SpeechRecognition.stopListening()
        }

        if (input == 'state') {
            setUser({ ...user, [input]: transcript });
            SpeechRecognition.stopListening()
        }

        if (input == 'district') {
            setUser({ ...user, [input]: transcript });
            SpeechRecognition.stopListening()
        }

        if (input == 'village') {
            setUser({ ...user, [input]: transcript });
            SpeechRecognition.stopListening()
        }

        if (input == 'panCard') {
            setUser({ ...user, [input]: transcript });
            SpeechRecognition.stopListening()
        }

        const divToHide = document.getElementById(input);
        divToHide.style.visibility = 'hidden';
        divToHide.parentElement.children[3].style.background = '#0074d9';
        divToHide.parentElement.children[3].innerHTML = 'Start Microphone'

        SpeechRecognition.stopListening()
        resetTranscript()


    }


    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <label htmlFor="firstName">First Name:</label>
                    <input className='box1'
                        type="text"
                        // id="firstName"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}

                    />
                    <div id='firstName' style={{visibility: 'hidden'}}><p className='box2'>{transcript}</p></div>
                    <button type="button" onClick={() => { toggleListening('firstName') }}>
                        {isListening ? 'Start Microphone' : 'Start Microphone'}
                    </button>
                </div>

                <div className='container'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input className='box1'
                        type="text"
                        // id="lastName"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                    <div id='lastName' style={{visibility: 'hidden'}}><p className='box2'>{transcript}</p></div>
                    <button type="button" onClick={() => { toggleListening('lastName') }}>
                        {isListening ? 'Start Microphone' : 'Start Microphone'}
                    </button>
                </div>

                <div className='container'>
                    <label htmlFor="state">State:</label>
                    <input className='box1'
                        type="text"
                        // id="state"
                        name="state"
                        value={user.state}
                        onChange={handleInputChange}
                    />
                    <div id='state' style={{visibility: 'hidden'}}><p className='box2'>{transcript}</p></div>
                    <button type="button" onClick={() => { toggleListening('state') }}>
                        {isListening ? 'Start Microphone' : 'Start Microphone'}
                    </button>
                </div>

                <div className='container'>
                    <label htmlFor="district">District:</label>
                    <input className='box1'
                        type="text"
                        // id="district"
                        name="district"
                        value={user.district}
                        onChange={handleInputChange}
                    />
                    <div id='district' style={{visibility: 'hidden'}}><p className='box2'>{transcript}</p></div>
                    <button type="button" onClick={() => { toggleListening('district') }}>
                        {isListening ? 'Start Microphone' : 'Start Microphone'}
                    </button>
                </div>

                <div className='container'>
                    <label htmlFor="village">Village:</label>
                    <input className='box1'
                        type="text"
                        // id="village"
                        name="village"
                        value={user.village}
                        onChange={handleInputChange}
                    />
                    <div id='village' style={{visibility: 'hidden'}}><p className='box2'>{transcript}</p></div>
                    <button type="button" onClick={() => { toggleListening('village') }}>
                        {isListening ? 'Start Microphone' : 'Start Microphone'}
                    </button>
                </div>

                <div className='container'>
                    <label htmlFor="panCard">PAN Card Number:</label>
                    <input className=''
                        type="text"
                        // id="panCard"
                        name="panCard"
                        value={user.panCard}
                        onChange={handleInputChange}
                    />
                    <div id='panCard' style={{visibility: 'hidden'}} ><p className='box2'>{transcript}</p></div>
                    <button type="button" onClick={() => { toggleListening('panCard') }}>
                        {isListening ? 'Start Microphone' : 'Start Microphone'}
                    </button>
                </div>
                <button type="submit">SUBMIT</button>

            </form>

        </div>
    );
}

export default User;


