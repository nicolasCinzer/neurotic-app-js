'use client';

import filtersStyle from './css/Filters.module.css';

const filters = ['Title', 'Tags', 'Cost', 'Date'];

export default function Filters({ currentTag, setCurrentTag, setValue, setSearchKey }) {
  const handleClick = filter => {
    setCurrentTag(filter);
    setValue('');
    setSearchKey({});
  };

  return (
    <div className={filtersStyle.filtersBody}>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => {
            handleClick(filter);
          }}
          className={filtersStyle.filter}
          style={currentTag === filter ? { background: 'var(--core-color)', border: '1px solid var(--core-bord)' } : null}
        >
          {filter}
        </button>
      ))}{' '}
    </div>
  );
}
