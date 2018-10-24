import mock from "./mock.js";
import API from "../../api/api";

export default {
  shopList: async params => {
    if (mock.data1.mock) {
      return mock.data1;
    }
    return await API.get("topics",params);
  },
  userList: async params => {
    if (mock.data2.mock) {
        return mock.data2;
      }
      return await API.get("topics",params);
  }
};
