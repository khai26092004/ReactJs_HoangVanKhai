import React, { Component } from 'react';
import EventForm1 from './compoments/HVK_EventForm1';
import HVK_EventForm2 from './compoments/HVK_EventForm2';
import HVK_EventForm3 from './compoments/HVK_EventForm3';
import HVK_EventForm4 from './compoments/HVK_EventForm4';


class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Event form Demo</h1>
                <EventForm1/>
                <HVK_EventForm2/>
                <HVK_EventForm3/>
                <HVK_EventForm4 name={"Hoàng Văn Khải"}/>
            </div>
        );
    }
}

export default App;