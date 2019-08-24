import React from 'react';
import {connect} from "react-redux";
import Main from "./pages/Main"
import { Admin,Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
connect((state)=>{
  return{
  
  }
})
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} >
        <Resource name="Map Mark sample test" list={Main} />
      </Admin>
    );
  }
}


function mapStateToProps(state) {

}

export default connect(mapStateToProps)(App);