import React from 'react'
import { Outlet } from "react-router-dom"

// components - Header & Footer
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
    <Header />

    <Outlet />

    <Footer />
    </>
  )
}

export default Layout