import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../store/accions/cartAction';

export default function Cart() {
  const productsCart = useSelector((state) => state.cart.productsCart);
  const dispatch = useDispatch();

  return (
    <div className='mr-3 relative'>
      <button onClick={productsCart.length != 0 ? () => dispatch(openModal(true)) : null} className='relative'>
        <div className={`absolute rounded-full w-5 h-5 bg-red-500 text-amber-50 flex items-center justify-center ${productsCart.length === 0 ? "hidden" : ""}`}>
          <p>{productsCart.length}</p>
        </div>
        <img src="/src/assets/cart.png" alt="Shopping cart" className='h-15 w-auto' />
      </button>
    </div>
  );
}
