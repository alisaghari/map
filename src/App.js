import React from 'react';
import {connect} from "react-redux";
import Main from "./pages/Main"
import { Admin, Resource, ListGuesser } from 'react-admin';
import {CommentList} from "./comments";
import jsonServerProvider from 'ra-data-json-server';
connect((state)=>{
  return{
  
  }
})
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
      
       <Resource name="users" list={ListGuesser} ></Resource>
       <Resource name="map marker" list={Main} />
    </Admin>
    );
  }
}


function mapStateToProps(state) {

}

export default connect(mapStateToProps)(App);