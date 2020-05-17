import React, { Component } from "react";
import moment from "moment-hijri";
import "./date-time.scss";

class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "DateTime",
            date: this.getDate(),
            dayOfWeek: this.getDayOfTheWeek(),
            hijriDate: this.getHijriDate(),
            timeNow: this.getTime()
        };
    }

    getTime() {
        return moment().format("HH:mm:ss");
    }

    getDate() {
        return moment().format("D MMMM YY");
    }

    getDayOfTheWeek() {
        return moment().format("ddd");
    }

    getHijriDate() {
        return moment().format("iD iMMMM iYYYY");
    }

    tick() {
        this.setState(() => ({
          timeNow: this.getTime()
        }));
      }

    componentDidMount() {
        // Arrow function allows you to use "this" in context of the Component
        this.interval = setInterval(() => {this.tick()}, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        return (
            <div>
                <div>{this.state.dayOfWeek} {this.state.date}</div>
                <div>{this.state.hijriDate}</div>
                <div>{this.state.timeNow}</div>
            </div>
        );
    }

}
export default DateTime;