import tagStyle from './css/Tag.module.css';

export default function Tag({ tag }) {
  return <div className={tagStyle.tag}>{tag}</div>;
}
