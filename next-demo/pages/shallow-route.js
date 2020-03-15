import React, {Component, Fragment} from 'react';
import Router, {withRouter} from 'next/router';

class ShallowRoute extends Component {
  componentDidUpdate (prevProps) {
    console.log(this.props)
  }

  render () {
    const { router } = this.props;

    return (
      <Fragment>
        <divs onClick={() => Router.push('/shallow-route?id=1', '/shallow-route?id=1', {shallow: true})}>跳到/shallow-route?id=1</divs>
        <div onClick={() => Router.push('/shallow-route?id=1', '/about', {shallow: true})}>跳到/about</div>
        <div>{router ? JSON.stringify(router.query) : '没有router对象'}</div>
      </Fragment>
    )
  }
}

ShallowRoute.getInitialProps = ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  console.log('getInitialProps')
  return { userAgent }
}

export default withRouter(ShallowRoute);
