import App, {Container} from 'next/app'
import React from 'react'

import Router from 'next/router';
export default class MyApp extends App {
  static async getInitialProps (params) {
    const { Component, router, ctx } = params;
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  onClick = () => {
    Router.push('/')
    if (window && window.sessionStorage) {
      console.log(window.sessionStorage.setItem('testValue', this.props.router.pathname))
    }
    console.log(this.props)
  }

  render () {
    const {Component, pageProps} = this.props

    return <Container>
      <div>我只是来试试</div>
      <button onClick={this.onClick}>click me</button>
      <Component {...pageProps} />
    </Container>
  }
}