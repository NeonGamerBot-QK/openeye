import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
function App() {
  const [checked, setChecked] =  useState (false);
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="">
        <h1 className={`lg:text-8xl text-5xl duration-500 transition-all font-bold ${checked ? "text-red-500" : ""}`}>An eye for an eye</h1>
        <label className="swap lg:text-[20rem] text-9xl  py-10">
  
  {/* <!-- this hidden checkbox controls the state --> */}
  <input type="checkbox" onChange={(e) =>  setChecked(e.target.checked)} value={checked}/> 
  <div className="swap-on"><FaEyeSlash /></div>
  <div className="swap-off"><FaEye /></div>
</label>
      </div>
    </div>
  </div>
  );
}

export default App;
