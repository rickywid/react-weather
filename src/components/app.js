import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="row">
      		<div className="col-md-12 head">
      			<h1 className="title">WEATHER FORECAST</h1>
      		</div>
      	</div>
      	<Header />
      	<WeatherList />
      </div>
    );
  }
}
