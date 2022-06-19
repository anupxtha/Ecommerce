import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ProductDescription from '../../../components/Product/ProductDescription';
import ProductDetail from '../../../components/Product/ProductDetail';
import ProductSuggestion from '../../../components/Product/ProductSuggestion';

const Post = () => {
  const router = useRouter();
  const { category, pid } = router.query;

  let num = pid && pid.match(/(\d+)/)[0];

  return (
    <>
      {num && (
        <>
          <ProductDetail pid={num} />
          {/* <ProductDescription /> */}
          <ProductSuggestion />
        </>
      )}
    </>
  );

  // const funPost = () => {
  //   if (pid) {
  //     let num = pid && pid.match(/(\d+)/)[0];
  //     return (
  //       <>
  //         <ProductDetail pid={num} />
  //         <ProductDescription />
  //         <ProductSuggestion />
  //       </>
  //     );
  //   } else {
  //     router.push('/');
  //   }
  // };

  // return funPost();
};

export default Post;
