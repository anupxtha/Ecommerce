import React from 'react';
import Layout from '../components/Common/Layout';
import Head from 'next/head';
import '../style.css';
import '../product.css';
import Footer from '../components/Common/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Ecommerce</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
