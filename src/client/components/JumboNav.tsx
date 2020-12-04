import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface JumboNavState { }
interface JumboNavProps { }


export default class JumboNav extends React.Component<JumboNavProps, JumboNavState> {



  render() {
    return (
      <main className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="logo display-4 align-left">Proper | Books</h1>
        </div>
        <div className="d-flex justify-content-right">
        <Link className="m-2" to="/" > Home </Link>
				<Link className="m-2" to="/compose"> Compose </Link>
				<Link className="m-2" to="/login"> Login </Link>
				<Link className="m-2" to="/register"> Register </Link>
        </div>
      </main>



    )
  }

}
