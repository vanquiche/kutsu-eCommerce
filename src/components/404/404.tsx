import { Link } from 'react-router-dom';
import './404.css';

const FourOFour = () => {
  return (
    <div className='page-container'>
      <div className='page-text-container'>
        <h5 className='page-title'>404: Page Not Found</h5>
        <p className='page-text'>It looks like this page got lost. The link below will help you find your way back.</p>
      </div>
        <Link to='/' className='page-link'>Kutsu</Link>
      {/* <LazyLoadImage src={dog} className='page-image' effect='blur'/> */}
    </div>
  );
};

export default FourOFour;
