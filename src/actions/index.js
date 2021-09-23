/* eslint-disable import/prefer-default-export */
import flats from "../flats";

export function setFlats() {
  // Api call or simulate DB

  return {
    type: "SET_FLATS",
    // flats comes from the json
    payload: flats,
  };
}

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat,
  };
}
