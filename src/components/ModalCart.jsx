import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteModal, openModal } from '../store/accions/cartAction';


export default function ModalCart() {
  const {modal, productsCart} = useSelector((state) => state.cart);
  const dispatch = useDispatch(); 

  if (!modal)
    return null 
  return (
    <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-5 rounded h-4/5 w-100 relative'>
        <button className='bg-green-600 text-amber-50 rounded p-1' onClick={() => dispatch(openModal(false))}>cerrar</button>
          {productsCart.map((product, index)=> (
            <div className='m-2 border-1 flex justify-between p-2 border-green-600'>
            <div >
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <button onClick={() => dispatch(deleteModal(index))}>remove</button>
            </div>
          ))}
          <div className='absolute bottom-2'>
            <p className='text-2xl'>TOTAL: ${productsCart.reduce((acc, product) => acc + product.price, 0)}</p>
          </div>
      </div>
    </div>
  );
}
