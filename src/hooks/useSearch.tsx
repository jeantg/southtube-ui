import { useState } from 'react';
import useDebounce from './useDebounce';

const useSearch = () => {
  const [titles, setTitles] = useState('');

  const debounced = useDebounce((value: string) => setTitles(value), 1000);

  return {
    titles,
    debounced
  };
};

export default useSearch;
