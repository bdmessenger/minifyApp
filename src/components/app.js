import React, {useState} from 'react';
import axios from 'axios';

export default function App() {

    const messageStyles = {
        success: {
            backgroundColor: '#c6f0d4',
            color: '#4a9662'
        },
        error: {
            backgroundColor: '#f6c0cb',
            color: '#ec365b'
        },
        clipboard: {
            backgroundColor: '#37409b',
            color: 'white'
        }
    }

    const [currentUrl, setCurrentUrl] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [isMessageAppear, setMessageAppear] = useState(false);
    const [currentStyle, setCurrentStyle] = useState('');

    React.useEffect(() => {
        if(isMessageAppear) {
            setTimeout(() => setMessageAppear(false), 3000);
        }
    }, [isMessageAppear]);

    const handleShortenUrlClick = () => {
        
        axios.post('/api/url', {
            url: currentUrl
        })
        .then(res => {
            if(res.data.status) {
                setNewUrl(`https://minify-app.herokuapp.com/${res.data.url}`);
                setCurrentStyle('success');
            } else {
                setCurrentStyle('error');
            }

            setMessageAppear(true);
        });
        
    }

    const handleCopyUrlClick = () => {
        if(newUrl !== '') {
            const copyText = document.getElementById('newUrlAddress');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            setCurrentStyle('clipboard');
            setMessageAppear(true);
        }
    }

    

    return(
        <>
            <div id="container">
                <h2 id="header">Minify</h2>
                <h3 id="author">By: Brant Messenger</h3>
                <div className="flexItem">
                    <input type="text" style={{backgroundColor: '#ededf7'}} value={currentUrl} onChange={(e) => setCurrentUrl(e.target.value) }/>
                    <button onClick={handleShortenUrlClick}><i className="fas fa-link"></i></button>
                </div>
                <div className="flexItem">
                    <input id="newUrlAddress" type="text" value={newUrl} onChange={() => null}/>
                    <button onClick={handleCopyUrlClick}><i className="far fa-clipboard"></i></button>
                </div>
            </div>
            <div id="message" className={isMessageAppear ? 'visible' : 'hidden'} style={messageStyles[currentStyle]}>
                <p>
                    {
                        currentStyle === 'error'  &&
                        <>
                            <i className="fas fa-exclamation-circle" style={{margin: '0 5px'}}></i>
                            Invalid URL.
                        </>
                    }

                    {
                        currentStyle === 'success' &&
                        <>
                            <i className="fas fa-check-circle" style={{margin: '0 5px'}}></i>
                            URL is shorten.
                        </>
                    }

                    {
                        currentStyle === 'clipboard' &&
                        <>
                            <i className="far fa-clipboard" style={{margin: '0 5px'}}></i>
                            URL copied.
                        </>
                    }
                </p>
            </div>
        </>
    );
}