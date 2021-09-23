/* eslint-disable import/prefer-default-export */
import flats from "../flats";

export function setFlats() {
  // Api call or simulate DB

  return {
    type: "SET_FLATS",
    payload: flats,
  };
}
