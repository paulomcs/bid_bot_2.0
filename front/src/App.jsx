import React from "react";
import Navbar from "./components/Navbar";

function App() {
  const background = "[#9c88ff]";
  
  return (
    <div className="flex  bg-cover bg-center bg-black flex-1 h-[100%]">
      <Navbar className="m-2" />
      
      <div className="bg-black text-white h-32">a</div>
    </div>
  );
}

export default App;
