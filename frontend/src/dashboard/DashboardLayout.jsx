import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Index from './Index';
import Profile from './Profile';
import Stores from './Stores';
import Store from './Store';
import Messages from './Messages';
import Message from './Message';
import Checkout from './Checkout';
import UserCrafts from './UserCrafts';
import UserCraft from './UserCraft';
import NotFound from './NotFound';

const DashboardLayout = () => {
  return (
    <div>
      <Outlet />
      <Header />
      <Footer />
    </div>
  )
}

export default DashboardLayout
