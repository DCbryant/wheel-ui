import  React from "react";
import Layout from './Layout';
import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import './layout.example.scss';

export default function() {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className="hi" style={{width: 500, height: 500}}>
          <Header className='x' >header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout className="x" style={{width: 500, height: 500}}>
          <Header className='z'>header</Header>
          <Layout>
            <Aside></Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>三个例子</h1>
        <Layout className="x" style={{width: 500, height: 500}}>
          <Header className='y'>header</Header>
          <Layout>
            <Content className="z">content</Content>
            <Aside></Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>四个例子</h1>
        <Layout className="hi" style={{width: 500, height: 500}}>
          <Aside className="z"></Aside>
          <Layout>
            <Header className='x'>header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}