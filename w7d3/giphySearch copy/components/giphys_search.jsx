import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault;
    this.state.searchTerm = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.fetchSearchGiphys(this.state.searchTerm);
    this.setState({searchTerm: ""});
  }

  render() {
    return(
      <div>
        <input onChange={this.handleChange} type="text"></input>
        <button onClick={this.handleSubmit} >Search</button><br />
        <GiphysIndex giphys={ this.props.giphys }/>
    </div>
    );
  }
}

export default GiphysSearch;
