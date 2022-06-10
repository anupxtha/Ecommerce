import ProductDescription from '../components/Product/ProductDescription';
import ProductDetail from '../components/Product/ProductDetail';
import ProductSuggestion from '../components/Product/ProductSuggestion';

export default function Product() {
  return (
    <>
      <ProductDetail />
      <ProductDescription />
      <ProductSuggestion />
    </>
  );
}
