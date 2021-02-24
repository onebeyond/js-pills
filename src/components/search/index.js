import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map(
            page =>
              console.log(page) || (
                <li key={page.id}>
                  <Link to={page.slug}>{page.title}</Link>
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      results: this.index
        .search(query, {})
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };
}
