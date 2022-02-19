import React from 'react';
import { Component } from 'react';
import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {

    return(

      <div className='vh-100'>

        <div className="container">

          <div className='col-lg-6 col-xl-6 col-sm-6 col-md-6'>

            <div className="map w-75">

              <Map className='w-75' google={this.props.google} zoom={10}>
      
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    
                </InfoWindow>
              </Map>

            </div>

          </div>

        </div>

      </div>

    );


  }


}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCz5BKFkPz85--7nWGyx6U0r1iY3dOjijA")
})(MapContainer)