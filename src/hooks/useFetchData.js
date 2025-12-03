import { useQuery } from '@tanstack/react-query';
import api from '../api/axios'; 

export const useFetchData = (resourcePath, queryKey, params = {}) => {
  const fetchData = async () => {
    const response = await api.get(resourcePath, {
      params: params 
    });
    return response.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [queryKey, params], 
    queryFn: fetchData,   
  });

  return { data, isLoading, isError, error, refetch };
};