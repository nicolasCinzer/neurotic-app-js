import filtersStyle from './css/Filters.module.css';

export default function Filters() {
  return (
    <div className={filtersStyle.filtersBody}>
      Filters <button className={filtersStyle.addFilter}>+</button>
    </div>
  );
}
