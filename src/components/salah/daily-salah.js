import React, { Component } from "react";
//import data from "../../data/times.json";
import moment from "moment-hijri";
import SalahService from "./service/salah-service";
import "./daily-salah.scss";

//For now use dummy data
class DailySalah extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            salahTimes: this.getSalahTimes(this.props.date, this.props.liveTimes, new SalahService())
        };
    }

    startInterval() {
        this.interval = setInterval(() => {
            this.setState({
            salahTimes : this.getSalahTimes(this.props.date, this.props.liveTimes, new SalahService())
            });
        }, 1000);

      }

      componentDidMount(){
         this.startInterval(); 
      }

      componentWillUnmount(){
          clearInterval(this.interval);
          this.interval = null;
      }

    getSalahTimes(date, liveTimes, _salahInfo) {
        date = date === null ? moment().format("DD/MM") : date;
        var times = liveTimes === false ? _salahInfo.getSalahDummyTimes(date) : _salahInfo.getSalahTimes();
        console.log("tiessssssss " + times);
        return times;
    }

    render() {
        //console.log("data" + this.state.p);
        //console.log("data " + this.state.p[this.state.date]);
       // const { date,_salahInfo, salahTimes } = this.state;
        return (
            <div className="box">
                <div>
                    <h2 className="eight">
                        <div className="h1">Fajr</div>
                        {this.state.salahTimes['Fajr']}
                        <span>
                            {this.state.salahTimes['Fajr Jamat']}
                        </span>
                    </h2>
                </div>
                <div>
                    <h2 className="eight">
                        <div className="h1">Zuhr</div>
                        {this.state.salahTimes['Zuhr']}
                        <span>
                            {this.state.salahTimes['Zuhr Jamat']}
                        </span>
                    </h2>
                </div>
                <div>
                    <h2 className="eight">
                        <div className="h1">Asr</div>
                        {this.state.salahTimes['Asr 2']}
                        <span>
                            {this.state.salahTimes['Asr Jamat']}
                        </span>
                    </h2>
                </div>
                <div>
                    <h2 className="eight">
                        <div className="h1">Maghrib</div>
                        {this.state.salahTimes['Maghrib']}
                        <span>
                            {this.state.salahTimes['Maghrib Jamat']}
                        </span>
                    </h2>
                </div>
                <div>
                    <h2 className="eight">
                        <div className="h1">Isha</div>
                        {this.state.salahTimes['Isha']}
                        <span>
                            {this.state.salahTimes['Isha Jamat']}
                        </span>
                    </h2>
                </div>
            </div>
        );
    }
}


export default DailySalah; 