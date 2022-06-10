import Head from 'next/head';
import Product from '../components/Home/Product';
import Slider from '../components/Home/slider';

export default function Home() {
  return (
    <>
      <Slider />
      <Product />
    </>
  );
}
