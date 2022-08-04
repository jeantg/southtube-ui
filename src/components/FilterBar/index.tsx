import { useState } from 'react';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import useSearch from '../../hooks/useSearch';

const filterItems = [
  { label: 'Todos', value: 'ALL' },
  { label: 'Tipo 1', value: 'TYPE1' },
  { label: 'TipoTipo 2', value: 'TYPE2' },
  { label: 'TipoTipoTipo 3', value: 'TYPE3' },
  { label: 'TipoTipoTipoTipo 4', value: 'TYPE4' },
  { label: 'TipoTipoTipoTipoTipo 5', value: 'TYPE5' },
  { label: 'TipoTipo 6', value: 'TYPE6' },
  { label: 'TipoTipoTipo 7', value: 'TYPE7' },
  { label: 'Tipo 8', value: 'TYPE8' },
  { label: 'TipoTipoTipoTipo 9', value: 'TYPE9' },
  { label: 'TipoTipoTipo 10', value: 'TYPE10' },
  { label: 'TipoTipoTipo 11', value: 'TYPE11' },
  { label: 'TipoTipoTipo 12', value: 'TYPE12' },
  { label: 'TipoTipoTipo 13', value: 'TYPE13' },
  { label: 'TipoTipoTipo 14', value: 'TYPE14' },
  { label: 'TipoTipoTipo 15', value: 'TYPE15' }
];

const FilterBar = () => {
  const [filter, setFilter] = useState('ALL');
  const { setTitles } = useSearch();
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const handleChange = (filter: string) => {
    setFilter(filter);
    setTitles(filter);
  };

  return (
    <>
      <hr className='border-t-2' />
      <div
        className='flex gap-3 whitespace-nowrap overflow-auto w-full justify-between px-4 py-3'
        {...events}
        ref={ref}
      >
        {filterItems.map((item) => (
          <button
            key={item.value}
            className={`border-2 bg-gray-100 rounded-full px-3 py-1 text-sm scroll ${
              filter === item.value && 'bg-black text-white border-none'
            }`}
            onClick={() => handleChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <hr className='border-t-2' />
    </>
  );
};

export default FilterBar;
