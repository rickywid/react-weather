import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

class WeatherList extends Component{

	renderList(data){
		const city = data.city.name;
		const country = data.city.country;
		const t = celcius(data.list[0].main.temp);		
		const p = pressureConvert(data.list[0].main.pressure);
		const h = data.list[0].main.humidity;
		const d = data.list[0].weather[0].description;

		const weather = data.list.map(weather=> weather.main.temp)
		const pressure = data.list.map(weather=> weather.main.pressure)
		const humidity = data.list.map(weather=> weather.main.humidity)

		function pressureConvert(kpa){
			return Math.round(kpa / 10);
		}
		function celcius(temp){
			return Math.round(temp - 273.15);
		}

		return (
			<tr key={city}>
				<td>{city}, {country}</td>
				<td>
					<Sparklines data={weather} width={200} height={70}>
						<SparklinesLine style={{ strokeWidth: 2, stroke: "#4c4cff", fill: "#9999ff" }}/>
					</Sparklines>
					<h6>{t}C - {d}</h6>
				</td>
				<td>
					<Sparklines data={pressure} width={200} height={70}>
						<SparklinesLine style={{ strokeWidth: 2, stroke: "#ff0000", fill: "#ff6666" }}/>
					</Sparklines>
					<h6>{p}kPa</h6>
				</td>
				<td>
					<Sparklines data={humidity} width={200} height={70}>
						<SparklinesLine style={{ strokeWidth: 2, stroke: "#008000", fill: "#66b266" }}/>
					</Sparklines>
					<h6>{h}%</h6>
				</td>
			</tr>
		)
	}
	render(){
		return(
			<div>
			<table className="table table-striped">
				<thead>
					<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.data.map(this.renderList)}
				</tbody>
			</table>
			</div>
		)
	}
}

//get data from reducer
function mapStateToProps(state){
	return({ data: state.weather })
}

export default connect(mapStateToProps)(WeatherList);