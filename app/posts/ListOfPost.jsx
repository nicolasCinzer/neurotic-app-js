import Link from 'next/link';
import { LikeButton } from './LikeButton';

const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
};

export default async function PostsPages() {
  const posts = await fetchData();

  const handleClick = () => {};

  return posts.map(({ id, title, body }) => (
    <article key={id}>
      <Link
        href='/posts/[id]'
        as={`posts/${id}`}
      >
        <h2>{title}</h2>
        <p>{body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
}
