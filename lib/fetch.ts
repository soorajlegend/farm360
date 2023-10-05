import type { NextApiRequest, NextApiResponse } from 'next';

export const fetchData = async (body: any, endpoint: string) => {
    try {
      const myHeaders = new Headers();
  
      const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow',
      };
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_FARM360_API_ROUTE}/${endpoint}`, requestOptions);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  // pages/api/yourEndpointName.ts


  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      if (req.method === 'POST') {
          try {
              
              const { name, clerkId, phone, email, image, address, utype } = req.body;
      // Use the variables as needed
      console.log(name, clerkId, phone, email, image, address, utype);

      // Your logic here

      res.status(200).json({ message: 'Data received successfully' });
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).json({ error: 'An error occurred while processing the data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
