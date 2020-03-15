import React from 'react';
export default class extends React.Component {
  componentDidMount() {
    this.getValue();
  }

  getValue = () => {
    if (window && window.sessionStorage &&　window.sessionStorage.testValue) {
      console.log(window.sessionStorage.testValue)
    } else {
      setTimeout(() => {
        console.log('initial testvalue1')
      }, 500);
    }
  }

  render() {
    return (
      <div>test</div>
    )
  }
}
// import Link from 'next/link';
// const Index = () => (
//   <div>
//     <Link href="/about">
//       <a>About Page</a>
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// );

// export default Index;``
