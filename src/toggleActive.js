import React from "react";

//import styled from "styled-components";

import { useGetToggleOn } from "./useToCallApi";

const ActiveToggleComponent = () => {
  const { data: toggleResult } = useGetToggleOn() || {};

  // let testArray = { data: [userBuilder(), userBuilder()] };

  return (
    <>
      <button type="button" value={{ toggleResult }}>
        XX{toggleResult.length}YY
      </button>
    </>
  );
};

export default ActiveToggleComponent;
