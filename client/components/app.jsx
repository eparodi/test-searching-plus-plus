import React, { Component } from 'react';
import { connect } from 'react-redux';

import Searchbox from './searchbox.jsx';
import Resultbox from './resultbox.jsx';

class App extends Component {
    constructor() {
        super();
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Hello world!</h1>
                </div>
                <Searchbox />
                <Resultbox results={this.props.results}/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        results: state.results,
        text: state.text,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
