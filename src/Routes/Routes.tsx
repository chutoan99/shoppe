import path from './path';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../configs/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Pay, Oder, Shop, Search, Home, Profile, LoginForm, PageNotFound, RegisterForm, DetailProduct, Categories, StatusOrder } from '../Pages/index';
import { useAppDispatch } from '../hooks/hooks';
import { fetchUser } from '../redux/userSlice';

const App = () => {
  const [loggedInUser, loadingx, _errorx] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, 'users', loggedInUser?.email as string),
          {
            email: loggedInUser?.email,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser?.photoURL,
          },
          { merge: true } // just update what is changed
        );
      } catch (error) {
        console.log('ERROR SETTING USER INFO IN DB', error);
      }
    };
    if (loggedInUser) {
      setUserInDb();
    }
    if (loggedInUser) {
      const { displayName, uid, providerId, photoURL, email } = loggedInUser;
      dispatch(
        fetchUser({
          displayName,
          uid,
          email,
          providerId,
          photoURL,
        })
      );
      navigate('/');
    }
  }, [loggedInUser]);

  return (
    <Routes>
      <Route path={path.PAY} element={<Pay />} />
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.ORDER} element={<Oder />} />
      <Route path={path.SHOP_ID} element={<Shop />} />
      <Route path={path.SEARCH} element={<Search />} />
      <Route path={path.LOGIN} element={<LoginForm />} />
      <Route path={path.PROFILE} element={<Profile />} />
      <Route path={path.REGISTER} element={<RegisterForm />} />
      <Route path={path.CATEGORIES} element={<Categories />} />
      <Route path={path.STATUS_ORDER} element={<StatusOrder />} />
      <Route path={path.PAGE_NOT_POUND} element={<PageNotFound />} />
      <Route path={path.DETAIL_PRODUCT} element={<DetailProduct />} />
      <Route path={path.DETAIL_PRODUCT_ID} element={<DetailProduct />} />
    </Routes>
  );
};

export default App;
