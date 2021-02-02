import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css'; 


const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="2824f75c-2925-40d4-9ab9-72c49da3d174"
            userName="sagarLamsal"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
        />
    );
}

export default App;
