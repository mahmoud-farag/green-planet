import React from 'react';
import { Component } from 'react';
import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
        <div className='container map_container'>

          <div className='row'>

            <div className='col-md-12 col-sm-12 col-lg-12 col-xl-12'>

            <Map google={this.props.google} zoom={10}>
 
              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                  
              </InfoWindow>
            </Map>

            </div>

          </div>

        </div>
        
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCz5BKFkPz85--7nWGyx6U0r1iY3dOjijA")
})(MapContainer)