"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../components/Modal';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import Card from '@/components/Card';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentModal(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentModal(0);
  };

  const nextModal = useCallback(() => {
    setCurrentModal((prev) => prev + 1);
  }, []);

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

  // Preload images
  useEffect(() => {
    const images = [
      "/Image wrap.svg", "modalheader.svg", "cancelButton.svg",
      "continueButton.svg", "tickicon.svg", "ButtoncloseX.svg",
      "2ndscreentitle.svg", "2ndscreentoggle1.svg", "2ndscreentoggle2.svg",
      "thirdscreentopicon.svg", "thirdscreentitle.svg", "metamask.svg",
      "pantom.svg", "Coinase.svg", "Plaid.svg", "thirdconfirmedButton.svg",
      "thirdscreenHinttext.svg", "fourthscreenimg.svg", "fourthscreentext.svg",
      "fifthtopicon.svg", "fifthscreentoptitle.svg", "fifthcontinueButton.svg",
      "sixtopicon.svg", "sixtoptitle.svg", "sixButtonclose X.svg", 
      "sixButtonsetting.svg", "sixButtoncancel.svg", "sixButtonconfirm.svg",
      "seventhtopicon.svg", "seventhtext.svg", "seventhuttoncontionue.svg"
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mt-8 mb-4">Modal Example</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
            Open Modal
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div>
              {currentModal === 1 && (
                <div>
                  <img src="/Image wrap.svg" alt="Image wrap" className="mt-0" />
                  <img src="modalheader.svg" alt="Image wrap" className="mt-2" />
                  <div className="flex justify-between">
                    <button className="bg-white text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                      <img src="cancelButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                    <button className="bg-white text-white font-bold py-2 px-4 rounded" onClick={nextModal}>
                      <img src="continueButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                  </div>
                </div>
              )}
              {currentModal === 2 && (
                <div className="flex-col flex-auto">
                  <div className="flex justify-between">
                    <img src="tickicon.svg" alt="Image wrap" className="mt-0" />
                    <img src="ButtoncloseX.svg" alt="Image wrap" className="mt-0" onClick={closeModal} />
                  </div>
                  <img src="2ndscreentitle.svg" alt="Image wrap" className="mt-4" />
                  <div className="flex-col mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="toggle1" />
                      <img src="2ndscreentoggle1.svg" alt="Image wrap" className="mt-2" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="toggle2" />
                      <img src="2ndscreentoggle2.svg" alt="Image wrap" className="mt-2" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button className="bg-white text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                      <img src="cancelButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                    <button className="bg-white text-white font-bold py-2 px-4 rounded" onClick={nextModal}>
                      <img src="continueButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                  </div>
                </div>
              )}
              {currentModal === 3 && (
                <div>
                  <div className="flex justify-end">
                    <img src="ButtoncloseX.svg" alt="Image wrap" className="mt-0" onClick={closeModal} />
                  </div>
                  <div className="flex justify-center">
                    <img src="thirdscreentopicon.svg" alt="Image wrap" className="mt-0" />
                  </div>
                  <div className="flex-col justify-center items-center mt-4 space-y-4">
                    <img src="thirdscreentitle.svg" alt="Image wrap" />
                    <img src="metamask.svg" alt="Image wrap" />
                    <img src="pantom.svg" alt="Image wrap" />
                    <img src="Coinase.svg" alt="Image wrap" />
                    <img src="Plaid.svg" alt="Image wrap" />
                  </div>
                  <div className="flex justify-center mt-2">
                    <button className="bg-white text-white font-bold py-2 px-4 rounded" onClick={nextModal}>
                      <img src="thirdconfirmedButton.svg" alt="Image wrap" className="mt-2 hover:shadow-lg" />
                    </button>
                    <img src="thirdscreenHinttext.svg" alt="Image wrap" className="mt-4" />
                  </div>
                </div>
              )}
              {currentModal === 4 && (
                <div className="flex-col justify-center items-center">
                  <img src="fourthscreenimg.svg" alt="Image wrap" className="mt-4" onClick={nextModal} />
                  <img src="fourthscreentext.svg" alt="Image wrap" className="mt-4" />
                </div>
              )}
              {currentModal === 5 && (
                <div className="flex-col justify-center">
                  <div className="flex justify-center gap-3">
                    <img src="fifthtopicon.svg" alt="Image wrap" className="mt-4" />
                    <img src="fifthscreentoptitle.svg" alt="Image wrap" className="mt-4" />
                  </div>
                  <div className="flex-col mt-6">
                    <div className="flex justify-center">
                      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">703</h1>
                    </div>
                    <div className="flex justify-between mt-4">
                      <h1>Total Assets</h1>
                      <h1>$52,456</h1>
                    </div>
                    <div className="flex justify-between mt-4">
                      <h1>Current Loans</h1>
                      <h1>2</h1>
                    </div>
                    <div className="flex-col mt-6">
                      <h1>Get your Vera Report via email</h1>
                      <Input className="mt-4" type="email" placeholder="Vera@VeraReport.com" />
                    </div>
                    <img src="fifthcontinueButton.svg" alt="Image wrap" className="mt-4" onClick={nextModal} />
                  </div>
                </div>
              )}
              {currentModal === 6 && (
                <div>
                  <div className="flex justify-between gap-4">
                    <img src="sixtopicon.svg" alt="Image wrap" className="mt-4" />
                    <img src="sixtoptitle.svg" alt="Image wrap" className="mt-4" />
                    <img src="sixButtonclose X.svg" alt="Image wrap" className="mt-4" onClick={closeModal} />
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-6 bg-gray-100 p-4">
                    <Card amount="1.24 ETH" amountInUSD="($3732.55)" plan="Low Interest Plan" details={cardDetails} />
                    <Card amount="1.24 ETH" amountInUSD="($3732.55)" plan="Low Interest Plan" details={cardDetails} />
                  </div>
                  <div className="flex justify-between gap-2 mt-6">
                    <div className="flex gap-2 mt-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-6 w-6 text-blue-600"
                      />
                      <p>Don’t show again</p>
                    </div>
                    <img src="sixButtonsetting.svg" alt="Image wrap" className="mt-0" />
                    <img src="sixButtoncancel.svg" alt="Image wrap" className="mt-0" onClick={closeModal} />
                    <img src="sixButtonconfirm.svg" alt="Image wrap" className="mt-0" onClick={nextModal} />
                  </div>
                </div>
              )}
              {currentModal === 7 && (
                <div className="flex flex-col items-center justify-center">
                  <img src="seventhtopicon.svg" alt="Image wrap" className="mt-4" />
                  <img src="seventhtext.svg" alt="Image wrap" className="mt-4" />
                  <img src="seventhuttoncontionue.svg" alt="Image wrap" className="mt-4" onClick={closeModal} />
                </div>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}
