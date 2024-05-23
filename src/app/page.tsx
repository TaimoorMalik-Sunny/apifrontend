"use client"

import React, { useState } from 'react';
import Modal from '../components/Modal';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Card from '@/components/Card';





export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isfirstmodal, setIsfirstmodal] = useState(true);

  const [isSeconmodal, setIsSeconmodal] = useState(false);



  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModal1 = () => {
    setIsfirstmodal(!isfirstmodal);
    // setIsSeconmodal(!isSeconmodal);
  };
  const nextModal2 = () => {
    setIsSeconmodal(!isSeconmodal);
  };
  
  const cardDetails = [
    { label: '1.2 ETH Principle', value: '($3,623.83)' },
    { label: '3% Interest Rate', value: '($108.72)' },
    { label: '30 Days', value: '' },
    { label: '80% LTV Collateral', value: '' },
  ];
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (

    <>
      <div className="flex justify-center items-center h-screen">
        {/* Other content of your main page */}
        {/* <CustomAlertDialog /> */}
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mt-8 mb-4">Modal Example</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
            Open Modal
          </button>



          <Modal isOpen={isModalOpen} onClose={closeModal}>


           


           
         
          <div className="flex flex-col items-center justify-center ">
      <div>
        <img src="seventhtopicon.svg" alt="Image wrap" className="mt-4" />
      </div>
      <div>
        <img src="seventhtext.svg" alt="Image wrap" className="mt-4" />
      </div>
      <div>
        <img src="seventhuttoncontionue.svg" alt="Image wrap" className="mt-4" />
      </div>
    </div>
           

          

           
           
           
           
           
           
           
           
           
           
           {/* <div>
           
           <div className='flex justify-between gap-4'>
           
           <img src="sixtopicon.svg" alt="Image wrap" className="mt-4" />
                
           <img src="sixtoptitle.svg" alt="Image wrap" className="mt-4" />
           
           <img src="sixButtonclose X.svg" alt="Image wrap" className="mt-4" />
           
           </div>
           
           
            
           <div className=" flex items-center justify-between gap-4 mt-6 bg-gray-100 p-4">
      <Card
        amount="1.24 ETH"
        amountInUSD="($3732.55)"
        plan="Low Interest Plan"
        details={cardDetails}
      />
         <Card
        amount="1.24 ETH"
        amountInUSD="($3732.55)"
        plan="Low Interest Plan"
        details={cardDetails}
      />

    </div> 
    <div className='flex justify-between gap-2 mt-6'>
    <div className='flex gap-2 mt-3'>
    <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-6 w-6 text-blue-600"
        />
    
    <p>Don’t show again</p>
    </div>
    
    <img src="sixButtonsetting.svg" alt="Image wrap" className="mt-0" />
    <img src="sixButtoncancel.svg" alt="Image wrap" className="mt-0" />
    <img src="sixButtonconfirm.svg" alt="Image wrap" className="mt-0" />


    </div>

           </div>
            */}
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           {/*    
            <div className='flex-col justify-center  '>
              <div className='flex justify-center gap-3'>
                <img src="fifthtopicon.svg" alt="Image wrap" className="mt-4" />
                
                <img src="fifthscreentoptitle.svg" alt="Image wrap" className="mt-4" />


              </div>

              <div className='flex-col justify-between'>
                <div className='flex justify-center mt-6'>
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    703
                  </h1>

                </div>
                <div className='flex justify-between mt-4' >
                  <h1>
                    Total Assets
                  </h1>
                  <h1>
                    $52,456
                  </h1>
                </div>
                <div className='flex justify-between mt-4' >
                  <h1>
                    Current Loans
                  </h1>
                  <h1>
                    2
                  </h1>
                </div>
                <div className='flex-col justify-between mt-6' >
                  <h1>
                    Get your Vera Report via email
                  </h1>

                  <Input className='mt-4' type="email" placeholder="Vera@VeraReport.com" />
                 
                </div>
                <img src="fifthcontinueButton.svg" alt="Image wrap" className="mt-4" />
                
              </div>

            
            </div>
            */}
            























            {/*          
          <div className="flex-col justify-center items-center">         
          
     <img src="fourthscreenimg.svg" alt="Image wrap" className="mt-4" />
    
    <img src="fourthscreentext.svg" alt="Image wrap" className="mt-4" />
    
    </div> */}












            {/* <>
          <div className='flex justify-end'>
          <img src="ButtoncloseX.svg" alt="Image wrap" className="mt-0" />
          </div>
                <div className='flex justify-center'>

                <img src="thirdscreentopicon.svg" alt="Image wrap" className="mt-0" />
              

                </div>
                

                <div className='flex-col justify-center'>
               
                <img src="thirdscreentitle.svg" alt="Image wrap" className="mt-4" />
                  <img src="metamask.svg" alt="Image wrap" className="mt-4" />
                  <img src="pantom.svg" alt="Image wrap" className="mt-4" />
                  <img src="Coinase.svg" alt="Image wrap" className="mt-4" />
                  <img src="Plaid.svg" alt="Image wrap" className="mt-4" />

                

                </div>


                <div className='flex-col justify-center mt-2 '>
              
                  <button className=" bg-white   text-white font-bold py-2 px-4 rounded" onClick={nextModal2}>
                    <img src="thirdconfirmedButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                  </button>
                  <img src="thirdscreenHinttext.svg" alt="Image wrap" className="mt-4" />
                </div>
              </>
            
 */}








            {/* {isfirstmodal ?
              (
                <>
                  <img src="/Image wrap.svg" alt="Image wrap" className="mt-0" />
                  <img src="modalheader.svg" alt="Image wrap" className="mt-2" /><div className='flex '>
                    <button className=" bg-white    text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                      <img src="cancelButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                    <button className=" bg-white   text-white font-bold py-2 px-4 rounded" onClick={nextModal1}>
                      <img src="continueButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                  </div>
                </>
              )
              :
              <>
                <div className='flex-col flex-auto '>
                  <div className='flex justify-between'>
                    <img src="tickicon.svg" alt="Image wrap" className="mt-0" />
                    <img src="ButtoncloseX.svg" alt="Image wrap" className="mt-0" />
                  </div>
                  <img src="2ndscreentitle.svg" alt="Image wrap" className="mt-4" />

                  <div className='flex-col mt-2'>
                    <div className="flex items-center space-x-2">
                      <Switch id="toggle1" />
                      <img src="2ndscreentoggle1.svg" alt="Image wrap" className="mt-2" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="toggle2" />
                      <img src="2ndscreentoggle2.svg" alt="Image wrap" className="mt-2" />
                    </div>

                  </div>

                </div>


                <div className='flex mt-2 '>
                  <button className=" bg-white    text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                    <img src="cancelButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                  </button>
                  <button className=" bg-white   text-white font-bold py-2 px-4 rounded" onClick={nextModal2}>
                    <img src="continueButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                  </button>
                </div>
              </>

            } */}




          </Modal>
        </div>

      </div>
    </>
  );
}
