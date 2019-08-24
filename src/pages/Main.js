import React from 'react';
import {connect} from "react-redux";
import {change_name,get_data} from "./../actions/userAction";
import {add} from "./../actions/tweetAction";
import axios from "axios";
import MapMarker from "./../component/MapMarker";

connect((state)=>{
  return{
    user:state.user
  }
})

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [],mark: []};
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
      this.props.dispatch(get_data(response))
    });

    axios.get("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.data)
  .then(data => {this.setState({ data })
  this.props.dispatch(get_data(data))
});
  }
  render() {
    return (
      <div>

                        <MapMarker latlng={[{lat: 36.153677, lng: 59.591963},{ lat: 36.153677, lng: 57.681177}, {lat: 36.295481, lng:54.989671 },{ lat: 35.583897, lng: 51.453322},{lat: 35.539211, lng:53.419015 }]} initialCenter={{ lat: 36.153677, lng: 56.181177}} height={"400px"} width={"100%"}></MapMarker>
       
        <div style={{ height:"400px" }}>

        </div>
        <div style={{ position:"relative" , zIndex:"9999" }}>
      <button style={{ marginLeft:"100px" }}  onClick={() => this.props.dispatch(change_name("hi"))}>set</button>
      <h1>{this.props.user.name}</h1>
  
      <button  onClick={() => this.props.dispatch(add(2))}>add</button>
      <h1>{this.props.tweet}</h1>
      <button  onClick={() => {
       //console.log(this.props.state.user.data);
        }
        }>fetch data</button>
        {console.log(this.state.data)}
              <ul>
        {
          this.state.data.map(function(data){
            return <li key={data.id}>{data.title}</li>;
          })
        }

        {
          console.log(this.props.data)
        }
        </ul>
      </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  //console.log(state);
  const { user } = state;
  const { tweet } = state;
  const { data } = state.user;
  return { user: user,
    tweet: tweet,
    data:data,
   }
}

export default connect(mapStateToProps)(Main);