import React, { Component } from 'react'

class Test extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 id="forms">Jumbotron</h1>
        </div>
        <div className="jumbotron">
          <h1>Provide a valid</h1>
          <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid
href, but still need the element to resemble a link</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>

      </div>
    )
  }
}

export default Test;
