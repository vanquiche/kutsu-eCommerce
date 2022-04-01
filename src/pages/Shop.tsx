import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
const Shop = () => {
  const id = '123'
  return (
  <Layout>
    <h1>Shop</h1>
    <Link to={id}>Product</Link>

  </Layout>
  )
}

export default Shop