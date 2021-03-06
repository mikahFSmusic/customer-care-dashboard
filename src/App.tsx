import React from 'react';
import logo from './Maisonette_Concierge.svg';
import './App.css';
// import { render } from '@testing-library/react';

class App extends React.Component<{}, {body: JSX.Element}> {
  constructor(props: any) {
    super(props);
    this.state = {
      body: this.case_form
    }
    this.select_body = this.select_body.bind(this);
  }

  case_form = <iframe src="https://airtable.com/embed/shrn8e1VtiYXunhX7?backgroundColor=cyan&viewControls=on"></iframe>

  customer_interaction = <iframe src="https://maisonette.kustomerapp.com/app/search/5f04f039a7eaba0019035277"></iframe>

  vendor_interaction =  <p>Vendor Interaction</p>

  select_body(e: React.MouseEvent) {
    let id = e.currentTarget.getAttribute('id');
    let app = this.case_form;
    if (id === "case-tracking") {
      app = this.case_form;
    } else if (id=== "customer-interaction") {
      app = this.customer_interaction;
    } else if (id === "vendor-interaction") {
      app = this.vendor_interaction;
    } else {
      app = this.case_form;
    }
    this.setState({
      body: app
    })
    console.log(this.state.body)
  };

  render() {
    let menuBar = (

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Menu-bar">
            <a className="Menu-item" id="case-tracking" onClick={this.select_body} >Case Tracking</a>
            <a className="Menu-item" id="customer-interaction" onClick={this.select_body} >Customer Interaction</a>
            <a className="Menu-item" id ="vendor-interaction" onClick={this.select_body} >Vendor Interaction</a>
          </div>
          {/* <button onClick={case_form}>Open A Case</button>
          <button>Another Item</button> */}
          {/*  */}
        </header>
    )
    let body = (
      <body>
        {this.state.body}
      </body>)

    console.log(body);
    return (
      <div className="App">
        {menuBar}
        {body}
      </div>
    )};
}

export default App;
