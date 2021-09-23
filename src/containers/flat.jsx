/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

// Redux + Actions
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectFlat } from "../actions";

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${this.props.flat.imageUrl})`,
    };

    let classes = "card-category";
    if (this.props.flat === this.props.selectedFlat) {
      classes += "selected";
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>
            {this.props.flat.price} {this.props.flat.priceCurrency}
          </p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat: selectFlat }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
