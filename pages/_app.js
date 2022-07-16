import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Common/Layout';
import Head from 'next/head';
import '../style.css';
import '../product.css';
import '../login.css';
import '../register.css';
import '../topSellProduct.css';
import '../cart.css';
import '../loader.css';
import '../wishlist.css';
import '../profile.css';
import '../shippingAddress.css';
import '../payment.css';
import '../orderDetails.css';
import '../footerSlider.css';
import Footer from '../components/Common/Footer';
import { DataContext, DataProvider } from '../store/GlobalState';
import Loading from '../components/Common/Loading';
import { useRouter } from 'next/router';
import SearchState from '../components/SearchedItems/searchState';
import MainState from '../components/context/mainState';

export default function App({ Component, pageProps }) {
  // const router = useRouter();

  // const [isLogged, SetIsLogged] = useState(false);

  // useEffect(() => {
  //   if (
  //     sessionStorage.getItem('authToken') &&
  //     Object.keys(sessionStorage.getItem('authToken')).length !== 0
  //   ) {
  //     SetIsLogged(true);
  //   }
  // }, []);

  // const checkComponent = () => {
  //   if (
  //     isLogged &&
  //     (Component.name === 'login' || Component.name === 'register')
  //   ) {
  //     router.push('/');
  //     SetIsLogged(false);
  //     return <Component {...pageProps} />;
  //   } else {
  //     return <Component {...pageProps} />;
  //   }
  // };

  // useEffect(() => {
  //   if (sessionStorage.getItem('authToken') === null) {
  //     return router.push('/login');
  //   }
  // }, []);

  return (
    <DataProvider>
      <Loading />
      <SearchState>
        <MainState>
          <Layout>
            <Head>
              <title>Ecommerce</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <Component {...pageProps} />
            {/* {checkComponent()} */}
          </Layout>
        </MainState>
      </SearchState>
      <Footer />
    </DataProvider>
  );
}
