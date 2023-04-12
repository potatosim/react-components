import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'enum/AppRoutes';
import AboutPage from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import HomePage from 'pages/HomePage';
import FormPage from 'pages/FormPage';
import Layout from 'layout/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.AboutUs} element={<AboutPage />} />
        <Route path={AppRoutes.Form} element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
