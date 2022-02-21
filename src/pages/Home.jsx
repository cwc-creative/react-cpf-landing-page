import React from 'react'
import Banner from '../components/banner/Banner'
import Header from '../components/header/Header'
import TopBar from '../components/topbar/TopBar'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <TopBar />
      <Header />
      <Banner />
    </MainLayout>
  )
}

export default Home