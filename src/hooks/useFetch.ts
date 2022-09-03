import { AxiosError } from "axios";
import { useState } from "react";

const useFetch = (apiFunc: any): any => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ status: false } as any);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
  
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);
      setError({ status: response.status === 200 ? false : true }); 
      setData(response.data);
      return response
      
    } catch (error: any) {
      setLoading(false);
      setError({ 
        status: true, 
        code: error?.response?.status || 500, 
        message: error?.response?.data?.message 
      })
      return null
    }

  };

  return { data, error, loading, request };
};

export default useFetch;