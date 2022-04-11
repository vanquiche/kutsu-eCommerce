import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
// import ProductThumb from '../components/Products/ProductThumb';
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
