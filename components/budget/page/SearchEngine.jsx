'use client';

import { useState } from 'react';

import searchStyle from './css/SearchEngine.module.css';

import Filters from './Filters';

export default function SearchEngine({ setSearchKey }) {
  const [value, setValue] = useState('');
  const [currentTag, setCurrentTag] = useState('Name');

  const handleChange = ({ target }) => {
    let value = target.value;
    
    setSearchKey({ key: `${value}`, filter: currentTag });
    setValue(value);
  };

  return (
    <div className={searchStyle.searchBody}>
      <div className={searchStyle.searchInput}>
        <div className={searchStyle.inputTitle}>Buscar</div>
        <input
          className={searchStyle.inputNode}
          placeholder={currentTag}
          onChange={handleChange}
          value={value}
        />
      </div>
      <Filters
        currentTag={currentTag}
        setCurrentTag={setCurrentTag}
        setValue={setValue}
      />
    </div>
  );
}
