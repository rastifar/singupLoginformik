import React,{useState} from "react";
import styles from './RegLog.module.css'
//Hoc
import WithRendering from "./withRendering";
//components
import Signup from './Signup';
import LoginSignup from "./LoginSignup";
import Login from "./Login";

const RegLog = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  return (
    <div className={styles.container}>
      <LoginSignup
        login={() => setIsSignedUp(true)}
        signup={() => setIsSignedUp(false)}
      />
      {isSignedUp ? <Login  /> : <Signup />}
    </div>
  );
};

export default RegLog;
