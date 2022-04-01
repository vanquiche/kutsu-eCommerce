import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Product from '../components/Product/Product';
const Home = () => {


  return (
    <Layout>
      <h1>Home</h1>
    {/* <Product /> */}
    <Link to='/shop'>Shop</Link>
    </Layout>
  );
};

export default Home;
