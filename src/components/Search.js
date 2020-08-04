import React from 'react';

class Search extends React.Component {
/////////// HANDLER FUNCTIONS ///////////
onChange = event => {
    this.props.search(event.target.value)
}

render() {
    return (
        <div>
            <input
                type='text'
                placeholder='Search'
                onChange={this.onChange}
                value={this.props.searchTerm}
            ></input>
        </div>
    )
}
}

export default Search