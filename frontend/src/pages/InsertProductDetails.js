import React, { useState } from 'react';
import { useFormik } from 'formik';
import {QRCodeSVG} from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';
const InsertProductDetails = () => {
  const [generatedQRCodes, setGeneratedQRCodes] = useState([]);

  const formik = useFormik({
    initialValues: {
      data: '',
      quantity: 20, // Default quantity set to 20
    },
    onSubmit: async (values) => {
      // Your QR code generation logic here
      // You can use a library like qrcode.react for generating QR codes

      // For demonstration purposes, you can log the data and quantity
      console.log('Data:', values.data);
      console.log('Quantity:', values.quantity);

      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
      const uniqueId = uuidv4(); // Generate a unique ID

      // Generate QR codes and store them in an array
      const generatedCodes = Array.from({ length: values.quantity }, (_, index) => ({
        id: index + 1,
        data: `${values.data}-${formattedDate}-${uniqueId}-${index + 1}`, // Append date, unique ID, and a unique identifier
      }));

      // Store the generated QR codes in state
      setGeneratedQRCodes(generatedCodes);

      // Make a POST request to your backend API to store the data in the database
      try {
        const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ codes: generatedCodes }),
        });

        if (!response.ok) {
          throw new Error('Error storing QR codes in the database');
        }

        console.log('QR codes stored in the database successfully');
      } catch (error) {
        console.error('Error:', error.message);
      }
    },
  });
  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Generate QR code
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          fill the below detials  of the product  and click on the generate QR code button to get the QR code of the the data. Also enter number of QR code to be generated
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
               Product name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
             Production line number
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Description/ details
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Generate 
            </button>
          </div>
       
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default InsertProductDetails