import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow,Marker } from 'google-maps-react';

export class MapMarker extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={{  width: this.props.width,height: this.props.height }}
          initialCenter={{ lat: this.props.initialCenter.lat, lng: this.props.initialCenter.lng}}
        >
        {
          this.props.latlng.map(function(data){
            return <Marker position={{ lat: data.lat, lng: data.lng}} ></Marker>;
          })
        }
          
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDn47NIjVmfXsXfr2tN9PH9xI1CANMUEmU'
})(MapMarker);