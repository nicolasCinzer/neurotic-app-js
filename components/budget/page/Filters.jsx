'use client';

import filtersStyle from './css/Filters.module.css';

const filters = ['Name', 'Tags', 'Cost', 'Date'];

export default function Filters({ currentTag, setCurrentTag, setValue }) {
  const handleClick = filter => {
    setCurrentTag(filter);
    setValue('');
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
