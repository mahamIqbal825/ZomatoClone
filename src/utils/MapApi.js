import axios from "axios";

export const GOOGLE_MAP_API = async (payload) => {
  const { latitude, longitude } = payload;
  const url =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    latitude +
    "," +
    longitude +
    "&key=AIzaSyAQDBt0FHmbPe6x7O6H5EudhcdaaFXO_H4";

  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  try {
    return await axios
      .get(url, { cancelToken: cancelToken.token })
      .then(function (response) {
        const { data } = response;
        const { results, status } = data;

        if (status === "OK") {
          const firstArray = results[0];
          const { formatted_address, address_components } = firstArray;

          let addrArea = "";
          let addrState = "";
          address_components.forEach((el) => {
            const { short_name, types } = el;
            if (types.includes("sublocality_level_1")) {
              addrArea = short_name;
            }
            if (types.includes("administrative_area_level_1")) {
              addrState = short_name;
            }
          });

          const address = {
            addrLine1: formatted_address,
            addres_latitude: latitude,
            addres_longitude: longitude,
            addrArea,
            addrState,
          };
          return address;
        }
      })
      .catch(function () {});
  } catch (error) {}
};
