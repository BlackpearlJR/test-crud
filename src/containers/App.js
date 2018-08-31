import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { checkUsersLocalStorage } from '../actions/resources';

import Routes from '../routes';
import Layout from './layout';

import Home from './pages/Home';

class App extends Component {
  state = {}

  static getDerivedStateFromProps(props, state){
    if(!props.users){
      props.checkUsersLocalStorage();
    }

    return true;
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  checkUsersLocalStorage: () => dispatch(checkUsersLocalStorage())
});

const mapStateToProps = state => ({
  users: state.resources.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

