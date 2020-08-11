//https://antfriend.herokuapp.com
// /rear/90  /front/90  /toggle/off /toggle/on
import React from "react";
import { useContext, useState, useEffect } from "react";
import { getToggleOn } from "./webbot";

const webbyContext = React.createContext({ loading: true });

const setDataOrErrorMessage = (
  response,
  data,
  error,
  setData = () => {},
  setErrorMessage = () => {}
) => {
  switch (response?.status) {
    case 200:
      setData(data);
      break;
    case 401:
      setErrorMessage("unauthorized");
      break;
    case 500:
      setErrorMessage("server error");
      break;
    default:
      error ? setErrorMessage("default error") : setErrorMessage(null);
      break;
  }
};

export const useGetToggleOn = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { loading } = useContext(webbyContext);

  useEffect(() => {
    const response = async () => {
      const { response, data, error } = await getToggleOn(webbyContext);

      setDataOrErrorMessage(response, data, error, setData, setErrorMessage);
    };

    if (!loading) {
      response();
    }
  }, [loading]);

  return {
    data,
    errorMessage
  };
};
