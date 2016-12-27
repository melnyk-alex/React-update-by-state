import React, {Component} from 'react';
import One from './components/One'
import Two from './components/Two'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello React!"
        };
    }

    handleMessageChanged = (text) => {
        this.setState({
            message: text
        })
    };

    render() {
        return (
            <div>
                <One onMessageChanged={this.handleMessageChanged} message={this.state.message}/>
                <Two onMessageChanged={this.handleMessageChanged} message={this.state.message}/>
            </div>
        );
    }
}

export default App;
