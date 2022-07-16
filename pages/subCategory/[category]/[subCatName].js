import { useRouter } from 'next/router';
import SubCat from '../../../components/CategoryItems/SubCat';

const subCategoryItem = () => {
  const router = useRouter();
  const { category, subCatName } = router.query;
  // const { catName } = router.query;
  console.log('sub', category);

  return (
    <>
      <SubCat subCatName={subCatName} category={category} />
    </>
  );
};

export default subCategoryItem;
