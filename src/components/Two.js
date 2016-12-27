import React, {Component} from 'react';

class Two extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.onMessageChanged('Two');
    };

    render() {
        return (
            <div>
                <h1>Two</h1>
                {this.props.message}
                <button type="button" onClick={this.handleClick}>SET TWO</button>
            </div>
        );
    }
}

export default Two;
