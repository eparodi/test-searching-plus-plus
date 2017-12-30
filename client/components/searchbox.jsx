import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions';


/**
 * We keep the UI state local, decoupled from the *REDUX STATE*.
 */

class Searchbox extends Component {
    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    componentDidMount() {
        this.setState({ text: '' });
    }

    render() {
        return (
            <div className="searchbox panel panel-default">
                <div className="panel-body">
                <h2>Buscá tu futura propiedad</h2>
                    <div className="input-group">
                        <input className="form-control" type="text" onChange={event => this.handleTextChange(event)} />
                        <div className="input-group-btn">
                            <button className="btn btn-primary search-button" onClick={() => this.props.doSearch(this.state.text)}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doSearch: (text) => dispatch(ACTIONS.searchFor(text))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);
