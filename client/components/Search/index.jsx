import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onChange(event) {
    this.updateQuery(event.target.value);
  }

  updateQuery(query) {
    this.setState({
      query,
    });
  }

  render() {
    return (
      <form>
        <input
          onChange={event => this.onChange(event)}
          placeholder="Search for movie title …"
          type="search"
          value={this.state.query}
        />
      </form>
    );
  }
}

export default Search;
