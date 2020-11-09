import React from 'react';
import { connect } from 'react-redux';
import { AlertBox } from '../AlertBox';
import {Footer} from '../Footer';
import {Header} from '../Header';

const LayoutComponent = ({ children, alert }) => {
  return(
    <>
      <Header />
      { alert.message && <AlertBox alert={alert} /> }
      <div className="content">
        { children }
      </div>
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
}
export const Layout = connect(mapStateToProps, null)(LayoutComponent);