import axios,{ AxiosError} from 'axios';








export async function calscore(walletadd:string):Promise<any> {
    // const { wallet_address, method } = req.query;
  // old 
  //   const api_key = 'cad0b799-0583-452c-b0dc-80776e975c8a';
  
    // new 
  
    const api_key = 'cad0b799-0583-452c-b0dc-80776e975c8a';
  
    // old 
  
  // const url = `https://rl9j4wdmt7.execute-api.us-east-1.amazonaws.com/prod/credit-score`;
  // new 
  const url = `https://x7l2w1cwfb.execute-api.us-east-1.amazonaws.com/prod/credit-score`;
 
  // new api 
  
  // https://x7l2w1cwfb.execute-api.us-east-1.amazonaws.com/prod/credit-score?api_key=cad0b799-0583-452c-b0dc-80776e975c8a&wallet_address=0xda9dfa130df4de4673b89022ee50ff26f6ea73cf&method=calculate
  

  // old one 
  
  // https://rl9j4wdmt7.execute-api.us-east-1.amazonaws.com/prod/loan-success-probability?api_key=cad0b799-0583-452c-b0dc-80776e975c8a&wallet_address=0x7821da4F804F4CbFa5ce1d88A0CdDF33C4aCDFf6&method=calculate&apr=30&loan_duration_in_secs=864000&loan_amount_usd=5000

//   https://rl9j4wdmt7.execute-api.us-east-1.amazonaws.com/prod/credit-score?api_key=cad0b799-0583-452c-b0dc-80776e975c8a&wallet_address=0x7821da4F804F4CbFa5ce1d88A0CdDF33C4aCDFf6&method=calculate

  try {
    const response = await axios.get(url, {
      params: {
        api_key,
        wallet_address:walletadd,
        method:"calculate",
      },
    });

    return response.data as {
        error : any ,
        data: any 
    }
    // NextResponse.json(response.data)
    // res.status(200).json(response.data);
  } catch (error:any) {
    const err:AxiosError = error
    console.error(error);
    console.log(err.message)
    return await calscore(walletadd)
    // return{ error: error.response} as {
    //     error : any ,
    //     data: any 
    // }
    // res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function calpro(wallet_address:string ,apr: number,loan_duration_in_secs:number , loan_amount_usd:number ):Promise<any> {
  // const { wallet_address, method } = req.query;


// new 
const api_key = 'cad0b799-0583-452c-b0dc-80776e975c8a';
const url = `https://x7l2w1cwfb.execute-api.us-east-1.amazonaws.com/prod/loan-success-probability`;



// old
// const api_key = 'cad0b799-0583-452c-b0dc-80776e975c8a';
// const url = `https://rl9j4wdmt7.execute-api.us-east-1.amazonaws.com/prod/loan-success-probability`;


// new 

  // https://x7l2w1cwfb.execute-api.us-east-1.amazonaws.com/prod/credit-score?api_key=cad0b799-0583-452c-b0dc-80776e975c8a&wallet_address=0xda9dfa130df4de4673b89022ee50ff26f6ea73cf&method=calculate



// old one 
// ?api_key=&wallet_address=0x7821da4F804F4CbFa5ce1d88A0CdDF33C4aCDFf6&method=calculate&apr=30&loan_duration_in_secs=864000&loan_amount_usd=5000

//   https://rl9j4wdmt7.execute-api.us-east-1.amazonaws.com/prod/credit-score?api_key=cad0b799-0583-452c-b0dc-80776e975c8a&wallet_address=0x7821da4F804F4CbFa5ce1d88A0CdDF33C4aCDFf6&method=calculate

try {
  const response = await axios.get(url, {
    params: {
      api_key,
      wallet_address:wallet_address,
      apr:apr,
      loan_duration_in_secs:loan_duration_in_secs,
      loan_amount_usd:loan_amount_usd,

      method:"calculate",
    },
  });

  return response.data as {
      error : any ,
      data: any 
  }
  // NextResponse.json(response.data)
  // res.status(200).json(response.data);
} catch (error:any) {
  console.error(error);

  console.log(error)
  return await calpro(wallet_address ,apr,loan_duration_in_secs, loan_amount_usd)
  // return{ error: error.response} as {
  //     error : any ,
  //     data: any 
  // }
  // res.status(500).json({ error: 'Internal Server Error' });
}
}