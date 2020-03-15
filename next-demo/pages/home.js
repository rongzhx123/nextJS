import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PassHref from 'components/PassHref';
import fetch from 'isomorphic-unfetch';

class Home extends Component {
  componentDidMount () {
    // Router.beforePopState(params => {
    //   console.log(params)
    //   const { url, as } = params;
    //   return true;
    // });
  }

  render () {
    console.log(this.props.response, 2)
    return (
      <div>
        <Link href='/about'>
          <a>关于</a>
        </Link>
        <Link href='/less-test'>
          <a>测试Less</a>
        </Link>
        <Link href='/post/123'>
          <a>帖子1</a>
        </Link>
        <Link href='/post/123?name=Jack' as='/post/123/Jack'>
          <a>帖子2</a>
        </Link>
        <Link href='/post/123?pid=abc'>
          <a>帖子3</a>
        </Link>
        <Link href='/post/[pid]' as='/post/1234'>
          <a>帖子4</a>
        </Link>
        <style jsx>
          {
            `
              a{
                display: block;
                margin-bottom:16px;
              }
            `
          }
        </style>
        <Link href='/head'>
          <a>自定义Head内容</a>
        </Link>
        <Link href='/link'>
          <a>Link组件自定义子组件</a>
        </Link>
        <Link href='/article?articleId=123' as='/article/123'>
          <a>自定义路由</a>
        </Link>
        <Link href={{pathname: '/url-object'}}>
          <a>URL对象</a>
        </Link>
        <Link href='/pass-href' passHref>
          <PassHref name='通过属性强制传递href' />
        </Link>
        <Link href='/?id=123' scroll={false}>
          <a>disabled scroll</a>
        </Link>
        <div className='as-href' onClick={() => Router.push('/about')}>
          通过API跳转到<span>关于</span>页面
        </div>
        <style>
          {`
            div.as-href{
              cursor: pointer;
              margin-bottom:16px;
              text-decoration:underline;
              width:fit-content;
            }
            div.as-href span{
              color:red;
            }
          `}
        </style>
        <Link href='/shallow-route'>
          <a>浅层路由</a>
        </Link>
      </div>
    )
  }
}
Home.getInitialProps = async function({req, res}) {
  let response = {};
  await fetch('http://localhost:3000/api/test')
    .then(result => result.json())
    .then(result => {
      response = result;
    });
    const result = {
      errorCode: res.statusCode,
      response
    };
    return {response: result};
}
// const Home = () => (
//   <div>
//     <Link href='/about'>
//       <a>关于</a>
//     </Link>
//     <Link href='/less-test'>
//       <a>测试Less</a>
//     </Link>
//     <Link href='/post/123'>
//       <a>帖子1</a>
//     </Link>
//     <Link href='/post/123?name=Jack'>
//       <a>帖子2</a>
//     </Link>
//     <Link href='/post/123?pid=abc'>
//       <a>帖子3</a>
//     </Link>
//     <Link href='/post/[pid]' as='/post/1234'>
//       <a>帖子4</a>
//     </Link>
//     <style jsx>
//       {
//         `
//           a{
//             display: block;
//             margin-bottom:16px;
//           }
//         `
//       }
//     </style>
//     <Link href='/head'>
//       <a>自定义Head内容</a>
//     </Link>
//     <Link href='/link'>
//       <a>Link组件自定义子组件</a>
//     </Link>
//     <Link href='/article?articleId=123' as='/article/123'>
//       <a>自定义路由</a>
//     </Link>
//     <Link href={{pathname: '/url-object'}}>
//       <a>URL对象</a>
//     </Link>
//     <Link href='/pass-href' passHref>
//       <PassHref name='通过属性强制传递href' />
//     </Link>
//     <Link href='/?id=123' scroll={false}>
//       <a>disabled scroll</a>
//     </Link>
//     <div className='as-href' onClick={() => Router.push('/about')}>
//       通过API跳转到<span>关于</span>页面
//     </div>
//     <style>
//       {`
//         div.as-href{
//           cursor: pointer;
//           margin-bottom:16px;
//           text-decoration:underline;
//           width:fit-content;
//         }
//         div.as-href span{
//           color:red;
//         }
//       `}
//     </style>
//   </div>
// );

export default Home;
