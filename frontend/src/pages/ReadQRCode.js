import React,{useState} from 'react'
// import {QrReader} from 'react-qr-reader';
const ReadQRCode = () => {
   
        const [result, setResult] = useState('');
        const [data, setData] = useState('No result');
        const handleScan = (data) => {
          if (data) {
            setResult(data);
          }
        };
      
        const handleError = (err) => {
          console.error(err);
        };
  return (
    <>
    {/* <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);
        }

        if (!!error) {
          console.info(error);
        }
      }}
      style={{ width: '100%' }}
    
    
    /> */}
     <p>{data}</p>
    </>
  )
}

export default ReadQRCode