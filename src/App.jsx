// PROVIDER COMPONENT
//1. Import { createContext } from react
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider> 

//CONSUMER COMPONENT
//1. Import { useContext } from react
//   import { MyContext } from "./ComponentA.jsx";
//2. const value = useContext(MyContext);

import ComponentA from "./ComponentA.jsx";
import React from 'react';

function App() {

  return (<ComponentA/>);
}

export default App;
