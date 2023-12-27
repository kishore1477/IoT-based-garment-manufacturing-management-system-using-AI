import logo from './logo.svg';
import './App.css';
import QRCode from 'react-qr-code';
// import GenerateQRCode from './pages/GenerateQRCode';
// import ReadQRCode from './pages/ReadQRCode';
// import { QrReader } from 'react-qr-reader';
import { useState, useEffect  } from 'react';
import Navbar from './pages/Navbar';
import InsertProductDetails from './pages/InsertProductDetails';


function App() {
  // useEffect(() => {
  //   const requestCameraPermission = async () => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  //       // Permission granted, do something with the camera stream if needed
  //       console.log('Camera permission granted:', stream);

  //       // Close the stream if you don't need it immediately
  //       // stream.getTracks().forEach(track => track.stop());
  //     } catch (error) {
  //       // Handle the error, e.g., user denied permission
  //       console.error('Error accessing camera:', error);
  //     }
  //   };

  //   // Call the function to request camera permission
  //   requestCameraPermission();
  // }, []); // Run this effect only once when the component mounts

  const jsonData = {
    key1: 'value1kshore',
    key2: 'value2',
    key3: 'value3',
  };

  // Convert JSON data to a string
  const jsonString = JSON.stringify(jsonData);
  
  const [result, setResult] = useState('');
  const [data, setData] = useState('No result');
  const handleScan = data => {
    if (data) {
      console.log('Result: ', data);
    }
  }

  const handleError = err => {
    console.error(err);
  };
  return (
    <div>
      <Navbar/>
      <InsertProductDetails/>
          {/* <QRCode value={jsonString} /> */}
  {/* <button></button> */}
  {/* <GenerateQRCode/> */}
  {/* <ReadQRCode/> */}

      </div>
  );
}

export default App;
