import { useRouter } from 'next/router';

import Categoryitems from '../../components/CategoryItems/Categoryitems';

const categoryItem = () => {
  const router = useRouter();
  const { catName } = router.query;
  //   console.log(catName)

  return (
    <>
      <Categoryitems catName={catName} />
    </>
  );
};

export default categoryItem;
