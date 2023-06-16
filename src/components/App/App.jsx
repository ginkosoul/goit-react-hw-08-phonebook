import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout, PrivateRoute, RestrictedRoute } from 'components';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
// import Home from 'pages/Home';
// import SignUpPage from 'pages/SignUp';
// import SignInPage from 'pages/SignIn';
// import ContactBook from 'pages/ContactBook';

const Home = lazy(() => import('pages/Home'));
const SignUpPage = lazy(() => import('pages/SignUp'));
const SignInPage = lazy(() => import('pages/SignIn'));
const ContactBook = lazy(() => import('pages/ContactBook'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="contacts" component={<Home />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignUpPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignInPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/" component={<ContactBook />} />}
        />
      </Route>
    </Routes>
  );
}
