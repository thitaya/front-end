import React, { Component } from 'react'
import Header from '../src/components/Header'
import 'isomorphic-fetch'
import '../src/styles/style.css'
import { Card, DatePicker } from 'antd';
import LayoutComponent from '../src/components/Layout'


// import 'antd/dist/antd.css';
// import Document, { Head, Main, NextScript } from 'next/document'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class extends Component {

  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <Header />
        <div style={{ background: '#ECECEC', padding: '50px',height: '1000px' }}>
          <div>
            <p> รายงานประจำวัน </p>
            <DatePicker onChange={onChange} />
            <LayoutComponent/>


          </div>
 
        </div>
      
          </div>

    );
  }
}