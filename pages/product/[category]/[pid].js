import { useRouter } from 'next/router';
import ProductDescription from '../../../components/Product/ProductDescription';
import ProductDetail from '../../../components/Product/ProductDetail';
import ProductSuggestion from '../../../components/Product/ProductSuggestion';

const Post = () => {
  const router = useRouter();
  const { category, pid } = router.query;

  const num = pid.match(/(\d+)/)[0];

  return (
    <>
      <ProductDetail />
      <ProductDescription />
      <ProductSuggestion />
    </>
  );
};

export default Post;
