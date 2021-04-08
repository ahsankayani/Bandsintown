import React from 'react';

class Search extends React.Component {
    state = {
        term: ''
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" placeholder="Search..." value={this.state.value} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
} 

export default Search;