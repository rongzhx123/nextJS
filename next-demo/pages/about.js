import math from 'utils/math';

const About = () => (
  <div>
    <p>Hello World</p>
    <span>{math(1)}</span>
    <style jsx>
      {`
        p{
          color: red !important;
        }
      `}
    </style>
    <style jsx global>
      {`
        div{
          color: ${math(2) === 3 ? 'blue' : 'black'}
        }
      `}
    </style>
  </div>
);

About.getInitialProps = ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default About;
