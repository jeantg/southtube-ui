import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import useSearch from '../../hooks/useSearch';

const Header = () => {
  const [value, setValue] = useState('');
  const { debounced } = useSearch();

  const handleChange = (value: string) => {
    setValue(value);
    debounced(value);
  };

  return (
    <div className='flex w-full justify-center p-2'>
      <div className='border-2 w-2/5 h-10  border-gray-300 flex items-center px-2 rounded'>
        <IoIosSearch size='22' className='text-center text-gray-400' />
        <input
          type='text'
          placeholder='Pesquisar'
          className='px-2 flex-1 bg-transparent'
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
