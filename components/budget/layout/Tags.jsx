'use client';

import tagsStyle from './css/Tags.module.css';
import Tag from './Tag';
import { useHorizontalScroll } from 'components/useSideScroll';

const sample = ['all', 'market', 'clothes', 'gym', 'budget', 'pelotas', 'arboledas', 'pepotlasta', 'aklsjakskajska', 'asjakkafsdjlakfja', 'akjskajska'];

export default function Tags() {
  const scrollRef = useHorizontalScroll();

  return (
    <div
      className={tagsStyle.tagsBody}
      ref={scrollRef}
    >
      {sample.map(tag => (
        <Tag
          tag={tag}
          key={tag}
        />
      ))}
    </div>
  );
}
