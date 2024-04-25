import React, { Component } from 'react';
import EventForm1 from './compoments/HVK_EventForm1';


class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Event form Demo</h1>
                <EventForm1/>
            </div>
        );
    }
}

export default App;