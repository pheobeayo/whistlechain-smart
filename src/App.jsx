import AllRoutes from "./config/AllRoutes";
import { configWeb3Modal } from "./connection";
import React from "react";

configWeb3Modal();

function App() {
  return (
       <AllRoutes/>
  )
}

export default App
