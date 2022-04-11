import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Catalogue from '../components/Products/Catalogue'
const Shop = () => {
  return (
  <Layout>
    {/* <h1>Shop</h1> */}
    <Catalogue />
  </Layout>
  )
}

export default Shop