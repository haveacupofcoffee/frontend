import React, {Component} from 'react';
import './index.css'
import PubSub from 'pubsub-js'

class List extends Component {

  state = {
    users:[],
    isFirstLoading: true,
    isLoading: false,
    error: ''
  }

  componentDidMount() {
    this.pubsubToken = PubSub.subscribe("UPDATE STATE", (_, data)=>{
      this.setState(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubsubToken)
  }

  render() {
    const {users, error, isFirstLoading, isLoading} = this.state
    return (
      <div className="row">

        {
          isFirstLoading ? <h2>Please enter a name to search</h2> :
            isLoading ? <h2>Loading...</h2> :
              error !== '' ? <h2>{error}</h2> :
                users.map(user => {
                  return (
                    <div className="card" key={user.id}>
                      <a rel="noreferrer" href={user.html_url} target="_blank">
                        <img alt="avartar_pic" src={user.avatar_url}
                             style={{width: '100px'}}/>
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })}
      </div>
    );
  }
}

export default List;