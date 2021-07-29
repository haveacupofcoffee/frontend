import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'


class Search extends Component {

  search = () => {

    //this.props.updateState({isFirstLoading: false, isLoading: true})
    PubSub.publish("UPDATE STATE", {isFirstLoading: false, isLoading: true})
    const {keywordInput:{value:keyword}} = this
    axios.get(`/api1/search/users?q=${keyword}`)
      .then(
        response => {
          console.log("Successfully fetched data", response.data);
          //this.props.updateState({users:response.data.items, error:'', isLoading: false})
          PubSub.publish("UPDATE STATE", {users:response.data.items, error:'', isLoading: false})
        },
        error => {
          console.log("Failed to fetched data", error);
          //this.props.updateState({users:[],error:error.message, isLoading: false})
          PubSub.publish("UPDATE STATE", {users:[],error:error.message, isLoading: false})
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