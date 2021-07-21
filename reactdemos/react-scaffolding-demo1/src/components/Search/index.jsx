import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

  search = () => {
    const {keywordInput:{value:keyword}} = this
    axios.get(`/api1/search/users23?q=${keyword}`)
      .then(
        response => {
          console.log("Successfully fetched data", response.data);
          this.props.updateState({users:response.data.items})
        },
        error => {
          console.log("Failed to fetched data", error);
          this.props.updateState({error:error.message})
        }
      )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={input => this.keywordInput = input}/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;