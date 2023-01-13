
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not ..
  // const [alert, setAlert] = useState(null);
  
  // const showAlert = (message , type ) => {
  //   setAlert({
  //     msg : message,
  //     type : type
  //   })
  // }

  let toggleMode = () => {
    if( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#343536";
      //showAlert("Dark Mode is Enabled " , "success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      //showAlert("Light Mode is Enabled " , "success");
    }
  }

  
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils"  mode = {mode} toggleMode = {toggleMode} />
    <div className="container my-3" >
    {/* <Routes>
          <Route exact path="/about" element={<About mode ={mode}/>} >
          </Route>
          <Route exact path="/" element= {<TextForm heading =" Enter the Text to analyze below" mode={mode}/>}>
          </Route>
    </Routes> */}
    <TextForm heading =" Enter the Text to analyze below" mode={mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
