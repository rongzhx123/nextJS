import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const MyBtn = React.forwardRef((props, ref) => {
  const { onClick, href } = props;
  return (
    <div>
      点我
      <span onClick={onClick} href={href} ref={ref}>一下</span>
      试试
      <style jsx>
        {`
          a{
            color: red;
            margin: 0 4px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
});

export default () => (
  <>
    <Head>
      <title>Link组件自定义子组件</title>
    </Head>
    <Link href='/'>
      <MyBtn />
    </Link>
  </>
);