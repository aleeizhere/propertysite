import axios from "axios";

import { backend_url } from "../api";
import { propertiesActions } from "./propertiesSlice";
export const getProperties = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(backend_url + "getproperties");

      let available = [];
      let funded = [];
      res.data.forEach((prop) => {
        if (prop.isAvailable) {
          available.push(prop);
        } else {
          funded.push(prop);
        }
      });
      dispatch(propertiesActions.setProperties({ available, funded }));
    } catch (e) {
      console.log("get properties broken because ", e);
    }
  };
};
