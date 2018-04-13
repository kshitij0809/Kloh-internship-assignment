import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends React.Component {
    constructor(props) {
        super(props);

      
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                   hello
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 