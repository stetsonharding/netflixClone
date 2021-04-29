import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyBE3_EiZ0b82Og34_MtaPl25fz8ukZeTps",
  authDomain: "netflix-c43e2.firebaseapp.com",
  projectId: "netflix-c43e2",
  storageBucket: "netflix-c43e2.appspot.com",
  messagingSenderId: "9693358495",
  appId: "1:9693358495:web:02389cb3758acff472b5aa",
  measurementId: "G-P2JQGMKTR3",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
