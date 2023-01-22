import Posts from './ListOfPost';

export default async function PostsPages() {
  return (
    <section>
      <h1 style={{ paddingBottom: '8px' }}>Estos son los posts...</h1>
      <Posts />
    </section>
  );
}
