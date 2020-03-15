import { useRouter } from 'next/router';

const Article = () => {
  const query = useRouter().query || {};
  return (
    <div>{JSON.stringify(query)}</div>
  );
};

Article.getInitialProps = (ctx) => {
  console.log(ctx.query, 'abc');
  return 1;
};

export default Article;
