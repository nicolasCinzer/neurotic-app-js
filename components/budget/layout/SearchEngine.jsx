import searchStyle from './css/SearchEngine.module.css';

export default function SearchEngine() {
  return (
    <div className={searchStyle.searchInput}>
      <div className={searchStyle.inputTitle}>Buscar</div>
      <input className={searchStyle.inputNode} />
    </div>
  );
}
