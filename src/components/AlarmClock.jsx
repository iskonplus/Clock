import React from "react";




const alarms = {
    hours: 20,
    minutes: 6,
    seconds: 0
}



class AlarmClock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            status: false,
            alONOff: "Alarm ON"
        }
    }

    onClickButton = () => {
        alarms.minutes =  -0;
        this.setState({ alONOff: "Alarm OFF" })
        
    }
    
    onClickButtonAddTimes = () => {
        alarms.minutes = this.props.dateAlarm.getMinutes();
        alarms.seconds = this.props.dateAlarm.getSeconds();
        this.setState({ alONOff: "Alarm ON" })
        console.log("Alarm to: ", alarms);
    }

    render() {

        return (
            <div className="fff">
                <div className="div_Wakeup">
                    {this.state.status ? <p>WAKE UP!</p> : <p>{this.state.alONOff}</p>}
                </div>

                <div className="block_button">
                    <div className="button_of">
                        <input type="button" value="off" onClick={this.onClickButton} className="of_on" />
                    </div>
                    <div className="button_of">
                        <input type="button" value="+ 15 sec" onClick={this.onClickButtonAddTimes} className="of_on" />
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {



        this.myInterval = setInterval(() => {
            
            this.props.clock.hours === alarms.hours && this.props.clock.minutes === alarms.minutes &&  this.props.clock.seconds === alarms.seconds?
                this.setState({ status: true }) : (this.setState({ status: false }))

        }, 1000);
    }




}

export default AlarmClock;