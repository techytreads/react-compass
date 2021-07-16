import React, {Component} from 'react';
import Jitsi from 'react-jitsi'
import Loader from "react-js-loader";


//const [displayName, setDisplayName] = useState('')
//const [roomName, setRoomName] = useState('')
//const [password, setPassword] = useState('')
//const [onCall, setOnCall] = useState(false)
export class OnlineInteractions extends Component {

    constructor(props){ 
        super(props);
        this.state = {
            displayName: '',
            roomName :'',
            password:'',
            onCall : false

          };

}   



  setDisplayName(value) {
 
    this.setState({
        displayName: value
    });
  }

  setRoomName(value) {

    this.setState({
        roomName: value
    });
  }
  setOnCall(value){
      alert("oncall called " + value + " " + this.state.onCall);
      this.setState({
        onCall: value
      });
  }

render() {
    return this.state.onCall
    ? (

        <>
        <p>Place Jitsi component here</p>
       
        <h2>My First Meeting!</h2>
        <Jitsi
        roomName={this.roomName}
        displayName={this.displayName}
        password={this.password}
        loadingComponent={Loader}
        onAPILoad={JitsiMeetAPI => console.log('Good Morning everyone!')}
      />
      </>
     )
     : (
        <>
          <h1>Create a Meeting</h1>
          <input type='text' placeholder='Room name' value={this.state.roomName} onChange={e => this.setRoomName(e.target.value)} />
          <input type='text' placeholder='Your name' value={this.state.displayName} onChange={e => this.setDisplayName('Sachinppatil1411')} />
          <button onClick={() => this.setOnCall(true)}> Let&apos;s start!</button> 
        </>
      )

    }

}

export default OnlineInteractions;