import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from 'pages/AboutPage/AboutPage';
import { AppRoutes } from 'enum/AppRoutes';
import Layout from 'layout/Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import HomePage from 'pages/HomePage/HomePage';
import FormPage from 'pages/FormPage/FormPage';

export default class AppRouter extends Component {
  render() {
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
  }
}
