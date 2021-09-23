/* eslint-disable react/prefer-stateless-function */
// React
import React, { Component } from "react";

// Redux + Actions
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFlats } from "../actions";

// Components
import Flat from "./flat";
class FlatList extends Component {
  // TEMPORARY CODE TO INTEGRATE HTML
  static defaultProps = {
    flats: [
      {
        name: "Charm at the Steps of Montmartre",
        imageUrl:
          "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        price: 164,
        priceCurrency: "EUR",
      },
    ],
  };

  componentWillMount() {
    // dispatch action to update redux tree (flats)
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => {
          return <Flat flat={flat} key={flat.name} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats: setFlats }, dispatch);
}

function mapStateToProps(reduxState) {
  return {
    // now we have access to this.props.flats with the updated state
    flats: reduxState.flats,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
