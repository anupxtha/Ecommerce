import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import apiServices from '../../utils/apiServices';
import SearchedProducts from '../SearchedItems/SearchedProducts';
import SearchContext from '../SearchedItems/searchContext';

function NavBar() {
  const [state, dispatch] = useContext(DataContext);
  const [hide, setHide] = useState(false);
  const { auth, cart, wishlist } = state;
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const details = Object.keys(auth).length !== 0 && auth;

  const [searchProduct, setSearchProduct] = useState('');
  const [productData, SetProductData] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const { searchedItems, setSearchedItems, visibleSearch, setVisibleSearch } =
    useContext(SearchContext);
  const [visible, setVisible] = useState();
  if (visible) {
    console.log(visible.length);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('loginStatus');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('cartProduct');
    dispatch({ type: 'AUTH', payload: {} });
    dispatch({ type: 'ADD_CART', payload: [] });
    dispatch({ type: 'ADD_WISHLIST', payload: [] });
    return router.push('/');
  };

  const LoggedRouter = () => {
    return (
      <div className="hoverImage">
        <div className="userImage">
          <img
            src={
              details.user_proifle.get_image
                ? 'http://127.0.0.1:8000' + details.user_proifle.get_image
                : '/images/LEGO.png'
            }
            alt="pp"
            style={{ borderRadius: '50%', width: '36px', height: '36px' }}
          />
          <div className="dropImage">
            <div className="innerDropImage">
              <Link href="/profile">
                <p style={{ color: 'black' }}>Profile</p>
              </Link>
              <p onClick={() => handleLogout()}>Logout</p>
            </div>
          </div>
        </div>
        {/* <i className="fa-solid fa-telegram"></i> */}
      </div>
    );
  };
  // console.log(searchProduct);
  useEffect(() => {
    apiServices
      .getProduct()
      .then((response) => {
        SetProductData(response.data);
        // setSearchedProduct(response.data);
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });

    apiServices
      .getCategory()
      .then((response) => {
        setCategories(response.data);
        // setSearchedProduct(response.data);
      })
      .catch((err) => {
        dispatch({
          type: 'NOTIFY',
          payload: { error: err.message },
        });
      });
  }, []);
  console.log(categories);

  useEffect(() => {
    if (searchProduct) {
      const searched = productData.filter((newData) => {
        const { product_name, product_category, product_size } = newData;
        return product_name
          .toLocaleLowerCase()
          .includes(searchProduct.toLocaleLowerCase());
      });

      setSearchedProduct(searched);
      setVisible(searched);
    } else {
      setSearchedProduct([]);
    }
  }, [searchProduct]);
  console.log(searchedProduct);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enter pressed');
    if (searchProduct) {
      router.push('/searched');
      // setSearchProduct('');
      setSearchedItems(searchedProduct);
      setVisible('');
    }
  };

  return (
    <div className="navBar">
      <div className="innerNav">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/images/2BGamer.png" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="menu">
          <div className="catDropDown">
            <div className="heading">
              <p>Category</p>
            </div>
            {categories && (
              <div className="innerCategoryDrop">
                {categories.map((newData) => {
                  return (
                    <div className="first">
                      <Link
                        href={
                          '/category/' + newData.category_name.replace(' ', '-')
                        }
                      >
                        <a>
                          <p className="catTitle">{newData.category_name}</p>
                        </a>
                      </Link>
                      {newData.sub_category.map((newSub) => {
                        return (
                          <Link
                            href={
                              '/subCategory/' +
                              newData.category_name.replace(' ', '-') +
                              '/' +
                              newSub.sub_category_name
                            }
                          >
                            <a>
                              <p>{newSub.sub_category_name}</p>
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}

                {/* <div className="first">
                  <p className="catTitle">Title</p>
                  <p>Name</p>
                  <p>name</p>
                </div>
                <div className="first">
                  <p className="catTitle">Title</p>
                  <p>Name</p>
                  <p>name</p>
                </div>
                <div className="first">
                  <p className="catTitle">Title</p>
                  <p>Name</p>
                  <p>name</p>
                </div>
                <div className="first">
                  <p className="catTitle">Title</p>
                  <p>Name</p>
                  <p>name</p>
                </div>
                <div className="first">
                  <p className="catTitle">Title</p>
                  <p>Name</p>
                  <p>name</p>
                </div> */}
              </div>
            )}
          </div>
          <Link href="/sales">
            <a style={{ color: 'black' }}>
              <p>Sale</p>
            </a>
          </Link>
          <p>About</p>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              placeholder="search"
            />

            <button className="btn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          {visible && (
            <div className="dropSearch">
              <div
                className="innerDropSearch"
                style={{ overflowY: 'scroll', maxHeight: '250px' }}
              >
                {searchedProduct.map((newData) => {
                  const { id, product_name, product_image, product_category } =
                    newData;

                  return (
                    <div key={id}>
                      <div className="details">
                        <Link
                          href={
                            '/product/' +
                            product_category.category_name.replace(' ', '-') +
                            '/' +
                            product_name.replace(' ', '-') +
                            '-' +
                            id
                          }
                        >
                          <div onClick={() => setSearchedProduct([])}>
                            <div className="para">
                              <p>{product_name}</p>
                            </div>
                            <img
                              src={
                                'http://127.0.0.1:8000' +
                                product_image[
                                  Math.floor(
                                    Math.random() * product_image.length
                                  )
                                ].product_image
                              }
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="icons">
          <Link href="/wishlist">
            <a style={{ color: 'white' }}>
              <i
                className="fa-solid fa-heart"
                style={{ position: 'relative', marginTop: '25px' }}
              >
                <span>{wishlist.length}</span>
              </i>
            </a>
          </Link>
          <Link href="/cart">
            <a style={{ color: 'white' }}>
              <i
                className="fa-solid fa-cart-shopping"
                style={{ position: 'relative', marginTop: '25px' }}
              >
                <span>{cart.length}</span>
              </i>
            </a>
          </Link>
          {Object.keys(auth).length === 0 ? (
            <Link href="/login">
              <a style={{ color: 'white', margin: '0' }}>
                <div className="profileIcon">
                  <i className="fa-solid fa-user"></i>
                </div>

                <div className="signinInfo">
                  <p>
                    Namaste, <br />
                    Sign In
                  </p>
                </div>
                {/* <p></p> */}
              </a>
            </Link>
          ) : (
            LoggedRouter()
          )}
        </div>
        <div class="dropdown" style={{ float: 'right' }}>
          <button class="dropbtn">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Shop</a>
            <a href="#">Sale</a>
            <a href="#">About</a>
            <a href="#">
              <i class="fa-solid fa-user"></i> Profile
            </a>
            <a href="#">
              <i class="fa-solid fa-heart"></i> Whislist
            </a>
            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
