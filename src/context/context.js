import React from 'react';
import superagent from 'superagent';

export const Context = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      history: [],
      method: null,
      url: null,
    };
  }

  processForm = (method, url, body, auth) => {
    console.log(method, url);
    this.setState({ history: [...this.state.history, url] });
    superagent(method, url).then((results) => {
      this.setState({ results });
    });
  }

  saveMethod = (event) => {
    event.preventDefault();
    const method = event.target.value.toUpperCase();
    console.log(method);
    this.setState({ method });
  }

  saveUrl = (event) => {
    event.preventDefault();
    const url = event.target.value;
    this.setState({ url });
  }

  passData = (event) => {
    event.preventDefault();
    this.processForm(this.state.method, this.state.url);
  }


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
