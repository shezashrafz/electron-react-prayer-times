import React from 'react';
import { withHookHOC } from './withHookHOC';



class HooksHOC extends React.Component {
    render() {
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
    };
}

export default withHookHOC(HooksHOC);

