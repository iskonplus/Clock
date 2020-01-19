import React from "react";
import AlarmClock from "./AlarmClock"



class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            flag: true
        }
    }


    render() {

        const dateNow = new Date();
        const dateAlarm = new Date();
        dateAlarm.setSeconds(dateNow.getSeconds() + 15)



        let clock = {
            hours: dateNow.getHours(),
            minutes: dateNow.getMinutes(),
            seconds: dateNow.getSeconds()
        }

        return (

            <div className="margin_clock">
                <div className="clock">
                    <div className="clocks Hours"><p>{clock.hours}</p></div>
                    <p>:</p>
                    <div className="clocks minutes"><p>{clock.minutes}</p></div>
                    <p>:</p>
                    {this.state.flag && <div className="clocks seconds"><p>{clock.seconds}</p></div>}
                </div>
                <div className="Alarm_clock">
                    <AlarmClock clock={clock} dateAlarm = {dateAlarm} />
                </div>

            </div>

        )
    }

    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({ flag: true })
        }, 1000);
    }
}


export default Clock;