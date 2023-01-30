'use client';

import { useState } from 'react';

import searchStyle from './css/SearchEngine.module.css';

import Filters from './Filters';

export default function SearchEngine({ setSearchKey }) {
  const [value, setValue] = useState('');
  const [currentTag, setCurrentTag] = useState('Title');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      console.log(key);
      setSearchKey({ key: `${value}`, filter: currentTag });
    }
  };

  return (
    <div className={searchStyle.searchBody}>
      <div className={searchStyle.searchInput}>
        <div className={searchStyle.inputTitle}>Buscar</div>
        <input
          className={searchStyle.inputNode}
          placeholder={currentTag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
      </div>
      <Filters
        currentTag={currentTag}
        setCurrentTag={setCurrentTag}
        setValue={setValue}
        setSearchKey={setSearchKey}
      />
    </div>
  );
}
