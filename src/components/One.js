import React, {Component} from 'react';

class One extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.handleStateUpdate('One');
    };

    handleStateUpdate = (text) => {
        this.props.onMessageChanged(text);
    };

    render() {
        return (
            <div>
                <h1>One</h1>
                {this.props.message}
                <button type="button" onClick={this.handleClick}>SET ONE</button>

                <Inner message={this.props.message} onStateUpdate={this.handleStateUpdate} />
            </div>
        );
    }
}

function Inner(props) {
    function handleClick(){
        props.onStateUpdate('INNER');
    }

    return (
        <div>
            {props.message}
            <button onClick={handleClick}>CHANGE</button>
        </div>
    );
}

export default One;
