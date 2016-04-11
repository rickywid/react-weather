import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import moment from 'moment';

class WeatherList extends Component{


	renderChart(data){

		var day_1_main_desc = data.list[0].weather[0].main;
		var day_2_main_desc = data.list[8].weather[0].main;
		var day_3_main_desc = data.list[16].weather[0].main;
		var day_4_main_desc = data.list[24].weather[0].main;
		var day_5_main_desc = data.list[32].weather[0].main;

		function kelvinToC(num){
			return Math.round(num - 273);
		}


		var city =  data.city.name;
		var country = data.city.country;
		var day_1 = kelvinToC(data.list[0].main.temp); // Temp in Kelvin
		var day_2 = kelvinToC(data.list[10].main.temp);
		var day_3 = kelvinToC(data.list[20].main.temp);
		var day_4 = kelvinToC(data.list[30].main.temp);
		var day_5 = kelvinToC(data.list[36].main.temp);

		var day_1_date = moment(data.list[0].dt * 1000).format("D"); //Day of month
		var day_2_date = moment(data.list[10].dt * 1000).format("D");
		var day_3_date = moment(data.list[20].dt * 1000).format("D");
		var day_4_date = moment(data.list[30].dt * 1000).format("D");
		var day_5_date = moment(data.list[36].dt * 1000).format("D");

		var day_1_week = moment(data.list[0].dt * 1000).format("ddd"); //Day of week
		var day_2_week = moment(data.list[10].dt * 1000).format("ddd");
		var day_3_week = moment(data.list[20].dt * 1000).format("ddd");
		var day_4_week = moment(data.list[30].dt * 1000).format("ddd");
		var day_5_week = moment(data.list[36].dt * 1000).format("ddd");

		var day_1_desc = data.list[0].weather[0].description; //Weather Description
		var day_2_desc = data.list[10].weather[0].description;
		var day_3_desc = data.list[20].weather[0].description;
		var day_4_desc = data.list[30].weather[0].description;
		var day_5_desc = data.list[36].weather[0].description;

		var day_1_icon, day_2_icon, day_3_icon, day_4_icon, day_5_icon;


		var day_1_label = moment(data.list[0].dt * 1000).format("ddd, D"); // Chart label - eg. Thu 7
		var day_2_label = moment(data.list[10].dt * 1000).format("ddd, D");
		var day_3_label = moment(data.list[20].dt * 1000).format("ddd, D");
		var day_4_label = moment(data.list[30].dt * 1000).format("ddd, D");
		var day_5_label = moment(data.list[36].dt * 1000).format("ddd, D");

	    var data = {
	      labels: [day_1_label, day_2_label, day_3_label, day_4_label, day_5_label],
	      series: [
	        [day_1, day_2 , day_3, day_4, day_5]
	      ]
	    };

	    var options = {
	      high: 40,
	      low: -20,
	      lineSmooth: false,
	      showArea: true
	    };

	    var type = 'Line';
	    var size = "ct-double-octave";

	    function weatherIcon(day){
		    if(day === "Clear"){
		    	return "wi wi-day-sunny";
		    } else if(day === "Rain"){
		    	return "wi wi-rain";
		    } else if(day === "Clouds"){
		    	return "wi wi-day-cloudy";
		    } else if(day === "Snow"){
		    	return "wi wi-day-snow";
		    } else if(day === "Thunderstorm"){
		    	return "wi wi-day-lightning";
		    } else if(day === "Drizzle"){
		    	return "wi wi-hail";
		    }else if(day === "Extreme"){
		    	return "wi wi-meteor";
		    }    	
	    }

	    day_1_icon = weatherIcon(day_1_main_desc);
	    day_2_icon = weatherIcon(day_2_main_desc);
	    day_3_icon = weatherIcon(day_3_main_desc);
	    day_4_icon = weatherIcon(day_4_main_desc);
	    day_5_icon = weatherIcon(day_5_main_desc);

	    
	    return (
	    	<div>
	    		<h5 className="search-result">{moment().format("dddd, MMMM Do YYYY")} - {city}, {country}</h5>
	    		<ChartistGraph className={"animated fadeInUp" + " " + size} data={data} options={options} type={type} />
	    		<hr/>

	    		<div className="icon-forecast animated fadeInUp">
					<div className="row">
					    <div className="col-md-2 col-md-offset-1">
						    <div className="panel panel-default">
								<div className="panel-heading">
									    <h3 className="panel-title">{day_1_week} {day_1_date}</h3>
								 </div>
								<div className="panel-body">

									<i className={day_1_icon}></i>
									<p className="weather-detail">{day_1}C</p>
									<p className="weather-detail">{day_1_desc}</p>
								 </div>
							</div>					    
					    </div>

					    <div className="col-md-2">
						    <div className="panel panel-default">
								<div className="panel-heading">
									    <h3 className="panel-title">{day_2_week} {day_2_date}</h3>
								 </div>
								<div className="panel-body">
							
									<i className={day_2_icon}></i>	
									<p className="weather-detail">{day_2}C</p>
									<p className="weather-detail">{day_2_desc}</p>
								 </div>
							</div>
						</div>

					    <div className="col-md-2">
						    <div className="panel panel-default">
								<div className="panel-heading">
									    <h3 className="panel-title">{day_3_week} {day_3_date}</h3>
								 </div>
								<div className="panel-body">

									<i className={day_3_icon}></i>
									<p className="weather-detail">{day_3}C</p>
									<p className="weather-detail">{day_3_desc}</p>
								 </div>
							</div>
					    </div>

					    <div className="col-md-2">
						    <div className="panel panel-default">
								<div className="panel-heading">
									    <h3 className="panel-title">{day_4_week} {day_4_date}</h3>
								 </div>
								<div className="panel-body">

									<i className={day_4_icon}></i>
									<p className="weather-detail">{day_4}C</p>
									<p className="weather-detail">{day_4_desc}</p>
								 </div>
							</div>
					    </div>

					    <div className="col-md-2">
						    <div className="panel panel-default">
								<div className="panel-heading">
									    <h3 className="panel-title">{day_5_week} {day_5_date}</h3>
								 </div>
								<div className="panel-body">
									
									<i className={day_5_icon}></i>
									<p className="weather-detail">{day_5}C</p>
									<p className="weather-detail">{day_5_desc}</p>
								 </div>
							</div>
					    </div>
					</div>
	    		</div>
	    	</div>
	    )	
	}


	render(){



		return (
			 <div className="chart">
			 	{this.props.data.map(this.renderChart)}			 	
			 </div>
		)
	}
}

//get data from reducer
function mapStateToProps(state){
	return({ data: state.weather })
}

export default connect(mapStateToProps)(WeatherList);