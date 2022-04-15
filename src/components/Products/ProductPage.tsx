import React, { useState, useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { ProductType } from '../../types/Types';
import { v4 } from 'uuid';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Recommended from './Recommended';
import './Product.css';

interface Props {
  product: ProductType;
}

const ProductPage: React.FC<Props> = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  const [inStock, setInStock] = useState(true);

  // return the current product being viewed
  const selectedProduct = useMemo(() => {
    return state.filter((item) => item.id === product.id)
  }, [state]);

  // if length equals 0 then product has not
  // been added to cart
  const qtyInCart = selectedProduct.length === 0 ? 0 : selectedProduct[0].qty!;

  const navigate = useNavigate();

  const addToCart = () => {
    dispatch({ type: 'add item', product: product });
  };

  useEffect(() => {
    if (qtyInCart >= product.stock!) {
      setInStock(false);
    } else if (qtyInCart < product.stock!) {
      setInStock(true);
    }
  }, [qtyInCart]);

  return (
    <div>
      <p className='shop-link'>
        <button className='link' onClick={() => navigate(-1)}>
          BACK
        </button>{' '}
        / {product.item.toUpperCase()}
      </p>
      <div className='product-container'>
        <img className='product-hero-image' src={product?.image} />

        <div className='info'>
          <p>
            {product.stock! < 8 ? `ONLY ${product.stock} LEFT` : 'IN STOCK'}
          </p>
          <div className='review-container'>
            {[...Array(product?.rating)].map(() => (
              <AiFillStar key={v4()} />
            ))}
            {product?.rating < 5
              ? [...Array(5 - product?.rating)].map(() => (
                  <AiOutlineStar key={v4()} />
                ))
              : false}
            <p className='review-count'>{product?.reviews} reviews</p>
          </div>
          <p className='product-title'>{(product?.item).toUpperCase()}</p>
          <p className='product-price'>${product?.format}</p>

          <p className='product-description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            ducimus eveniet earum quas ipsa repellendus, repudiandae nesciunt!
            Corrupti itaque non quibusdam omnis atque consequatur inventore ab
            ullam, tempora illum. Maiores?
          </p>
          <button
            onClick={addToCart}
            className='add-btn'
            disabled={!inStock ? true : false}
          >
            {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
          </button>
        </div>
      </div>

      <div className='detail-container'>
        <div className='product-details'>
          <div className='details'>
            <p className='detail-title'>DESCRIPTION</p>
            <p>
              Enim minim ad qui aliquip aliquip qui esse. Id id aute velit
              ullamco aliquip ad deserunt tempor id officia id id. Ut aute enim
              reprehenderit nisi et sint dolore ipsum nisi id adipisicing. Amet
              tempor sint esse ex cupidatat labore excepteur culpa aute.
              Excepteur elit pariatur nostrud officia.
            </p>
          </div>

          <div className='details'>
            <p className='detail-title'>MATERIAL</p>
            <p>
              Nostrud culpa non consectetur ullamco aute consequat qui.
              Consequat ex laborum Lorem reprehenderit commodo excepteur commodo
              nisi deserunt veniam ipsum dolore et. Et laborum id excepteur
              proident ea consequat. Aute aute nostrud id consequat elit dolor
              commodo. Ea eiusmod laborum esse qui ad sunt tempor consectetur
              incididunt sit. In laboris consectetur deserunt cillum anim
              pariatur nulla dolor nostrud pariatur. Amet ipsum esse consectetur
              proident excepteur culpa sunt mollit est.
            </p>
          </div>

          <div className='details'>
            <p className='detail-title'>LIMITED</p>
            <p>
              Ad sunt officia sint elit reprehenderit tempor magna labore et
              enim eu deserunt exercitation elit. Sint adipisicing occaecat
              pariatur nulla elit aliquip ad nulla. Aliquip mollit proident
              officia ullamco enim labore sint deserunt. Aliquip pariatur sunt
              anim exercitation irure mollit in voluptate esse ex ad cillum
              nostrud. Amet quis reprehenderit ad aliquip. Do enim aliqua do
              mollit magna commodo tempor anim voluptate deserunt. Esse cillum
              officia eu do duis quis dolore in anim minim labore.
            </p>
          </div>
        </div>
      </div>
      <Recommended />
    </div>
  );
};

export default React.memo(ProductPage);
