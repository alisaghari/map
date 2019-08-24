import React from 'react';
// import Main from "./pages/Main"
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import dataProvider from "./core/dataProvider";

class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} >
        {/*<Resource name="Map Mark sample test" list={Main} />*/}
        <Resource name="user" list={ListGuesser} show={ShowGuesser} edit={EditGuesser} />
        <Resource name="point" list={ListGuesser} show={ShowGuesser} edit={EditGuesser} />
      </Admin>
    );
  }
}

export default App;