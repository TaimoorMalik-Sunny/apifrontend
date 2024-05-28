"use client"

import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import Modal from '../components/Modal';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import Card from '@/components/Card';
import { calpro, calscore } from './api';
import { Button } from '@/components/ui/button';
import { Mail } from "lucide-react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);

  const [connectionStatus, setConnectionStatus] = useState("");
  
  const [walletadd, Setwalletadd] = useState("")

  const [Total_Balance, setTotal_Balance] = useState(0);


  const [Total_loans, setTotal_loans] = useState(0);


  const [Credit_Score, setCredit_Score] = useState(0);


  
  
let ethereum:any 

  const connectToWallet = async () => {
    console.log(ethereum)
    ethereum = (window as  any ).ethereum;
    if (ethereum) {
      try {
        // Requesting access to MetaMask wallet
       const etherValue= await ethereum.request({ method: "eth_requestAccounts" }).
  
       then((addr: string[])=>{
        // setEtherValuestate(addr)
        //  address && 
      
        console.log(addr[0])
        
        Setwalletadd(addr[0]); ;
         
       
        //  dispatch(getWalletAttributes( { walletAddress:addr[0]}));
        
        // dispatch(getWalletNftsCount({ walletAddress:addr[0]}))
        
        //  dispatch(getWalletNftsCount({walletAddress:"0xfa3ce71036dd4564d7d8de19d2b90fb856c5be82"}))
        // dispatch(getWalletNftsCount({walletAddress:addr[0]}))
        
        // dispatch(getHighestLtvLoans({walletAddress:addr[0]}))
        
        
        // 0xfa3ce71036dd4564d7d8de19d2b90fb856c5be82
      
        
       //  dispatch(getWalletAttributes( { walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}));
        
        
        //  address && 
        
        //  address && 
      //    dispatch(calcCreditScore({ walletAddress:addr[0]}))
      //  //  dispatch(calcCreditScore({ walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}))
        
      //   //  address && 
      //   dispatch(calcPreApproval({ walletAddress:addr[0]}))
      //   // dispatch(fetchNFTsForOwner({walletAddress:addr[0]}))
      //    dispatch(getWalletTokensAndAssets({walletAddress:addr[0]}))
      // //  dispatch(getWalletTokensAndAssets({walletAddress:"0x3E18E3987b3B73F4E7CB80e2B25776Df7a30bb8b"}))

        // 0x3E18E3987b3B73F4E7CB80e2B25776Df7a30bb8b
      //   dispatch(fetchNFTsForOwner({walletAddress:addr[0]}));
      // //  dispatch(fetchNFTsForOwner({walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}));
      // // Fetch Tokens for a wallet address
      //  dispatch(fetchTokensForOwner({ walletAddress:addr[0]}));
       // dispatch(fetchTokensForOwner({ walletAddress:"0xD5aE740ED785Cf3Fa54A176eE855A721591343D4"}));
       
        //dispatch(fetchTitleForOwner({ walletAddress:"0x0fe93C4feBD368204D81758468EE5BFAF623fA5f"}))
        // dispatch(fetchTitleForOwner({ walletAddress:addr[0]}))
       }
       );
     
      
        setConnectionStatus("Successfully Connected");
        // state.address = etherValue
        console.log(connectionStatus)
      } catch (error) {
        setConnectionStatus("Connection Failed");
        console.error("MetaMask connection error:", error);
      }
    } else {
      setConnectionStatus("MetaMask Not Detected");
    }
   
  };
  
  async function handlecalscore(e: FormEvent) {
    nextModal()
    e.preventDefault()
    // setIsLoading(true);
    console.log("cal score ")
    // Setwalletadd(`0x0fe93c4febd368204d81758468ee5bfaf623fa5f`)
    
 
    // `0x0fe93c4febd368204d81758468ee5bfaf623fa5f`

    const res = await calscore(walletadd).then((res: any) => {
      console.log(res.data)
      // setIsLoading(false);
      nextModal()
      
      const { wallet_attributes } = res.data as any;

      const {
        eth_balance_worth_in_usd,
        bored_ape_worth_in_usd,
        mutant_ape_worth_in_usd,
        otherdeed_for_otherside_worth_in_usd,
        azuki_worth_in_usd,
        azuki_elemental_beans_worth_in_usd,
        azuki_elementals_worth_in_usd,
        beanz_official_worth_in_usd,
        redacted_remilio_babies_worth_in_usd,
        milady_maker_worth_in_usd,
        clone_x_worth_in_usd,
        doodles_worth_in_usd,
        pudgy_penguin_worth_in_usd,
        de_gods_worth_in_usd,
        
        bend_dao_num_of_total_loans,
        blend_num_of_total_loans,
        nftfi_num_of_total_loans,
        
        bend_dao_num_of_loan_liquidated,
        blend_num_of_loan_liquidated,
        nftfi_num_of_loan_liquidated,
        
        eth_balance,
        
        active_age_of_wallet_in_days,
      
      
      
      
      
      } = wallet_attributes;
     // ye chaye 
     const Total_Balance =
     eth_balance_worth_in_usd +
     bored_ape_worth_in_usd +
     mutant_ape_worth_in_usd +
     otherdeed_for_otherside_worth_in_usd +
     azuki_worth_in_usd +
     azuki_elemental_beans_worth_in_usd +
     azuki_elementals_worth_in_usd +
     beanz_official_worth_in_usd +
     redacted_remilio_babies_worth_in_usd +
     milady_maker_worth_in_usd +
     clone_x_worth_in_usd +
     doodles_worth_in_usd +
     pudgy_penguin_worth_in_usd +
     de_gods_worth_in_usd;
   

   setTotal_Balance(Total_Balance);
   
   
   // ye chaye 

   const Total_loans =
     bend_dao_num_of_total_loans +
     blend_num_of_total_loans +
     nftfi_num_of_total_loans

   setTotal_loans(Total_loans);

        
      // ye chaye 
      setCredit_Score(res.data.credit_score)
    

    })
    }


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
                    <div className='flex-col  space-y-6'>
                    <Button className='flex  w-96 gap-6 border-2' variant="ghost" onClick={connectToWallet}>
                    <img src="metamask.svg" alt="Image wrap" />Meta Mask
                  </Button>
                 
                  <Button className='flex w-96  gap-6 border-2' variant="ghost">
                    <img src="pantom.svg" alt="Image wrap" />Phantom
                  </Button>
                  
                  <Button className='flex  w-96 gap-6 border-2' variant="ghost">
                    <img src="Coinase.svg" alt="Image wrap" />CoinBase
                  </Button>
                  
                  <Button className='flex  w-96 gap-6 border-2' variant="ghost">
                    <img src="Plaid.svg" alt="Image wrap" />Plaid
                  </Button>
                  </div>
                  
                  </div>
                  <div className="flex-col justify-center mt-2">
                    <button className="bg-white text-white font-bold py-2 px-4 rounded" onClick={handlecalscore}>
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
                      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{Credit_Score}</h1>
                    </div>
                    <div className="flex justify-between mt-4">
                      <h1>Total Assets</h1>
                      <h1>${Total_Balance}</h1>
                    </div>
                    <div className="flex justify-between mt-4">
                      <h1>Current Loans</h1>
                      <h1>{Total_loans}</h1>
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
