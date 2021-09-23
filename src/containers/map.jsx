/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// redux
import { connect } from "react-redux";
class Map extends Component {
  render() {
    const style = {
      width: "20px",
      height: "20px",
      backgroundColor: "red",
      borderRadius: "50%",
    };
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = (
        <div
          style={style}
          lat={this.props.selectedFlat.lat}
          lng={this.props.selectedFlat.lng}
        />
      );
      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng,
      };
    }
    return (
      <div className="col-sm-5" style={{ height: "100vh" }}>
        <GoogleMapReact center={center} defaultZoom={15}>
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat,
  };
}

export default connect(mapStateToProps)(Map);
