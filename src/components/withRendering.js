import React, { useContext } from "react";
import { isAuthenticatedContext } from "./AuthContextProvider";
import Login from "./Login";

import RegLog from "./RegLog";

const WithRendering = (Component) => {
  function WithRenderingComponent({ ...props }) {
    const { user, removeFromUser,addToUser } = useContext(isAuthenticatedContext);
    return (
      <>
        
        {user ?  <Component name={user} logout={removeFromUser}{ ...props }/>:  <RegLog  />}
      
      </>
    );
  }
  return WithRenderingComponent;
};

export default WithRendering;
