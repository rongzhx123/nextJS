import {useRouter} from 'next/router';

const Post = () => {
  const router = useRouter();
  const {pid} = router.query;
  console.log(pid)
  return (
    <div>{JSON.stringify(router.query)}</div>
  );
};

Post.getInitialProps = ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}
export default Post;
