import React from 'react'
import QRCode from 'react-qr-code';
const GenerateQRCode = () => {
    const jsonData = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      };
    
      // Convert JSON data to a string
      const jsonString = JSON.stringify(jsonData);
  return (
    <div>

    <QRCode value={jsonString} />
    </div>
  )
}

export default GenerateQRCode