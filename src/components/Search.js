import React from 'react';

class Search extends React.Component {
/////////// STATE ///////////
constructor() {
    super();
    this.state = {
        term: ''
    }
}

/////////// HANDLER FUNCTIONS ///////////
onChange = event => {
    this.setState({
        term: event.target.value
    })
}

onSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.term);
}

render() {
    return (
        <div>
            <input
                type='text'
                onChange={this.onChange}
                value={this.state.term}
            ></input>
            <button onClick={this.onSubmit}>Search</button>
        </div>
    )
}
}

export default Search