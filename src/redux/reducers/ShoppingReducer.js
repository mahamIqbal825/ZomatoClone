import * as types from '../actions/types';

const initialState = {
  productsCart: [],
  productsFavour: [],
  cartCount: 0,
  cartAmount: 0,
  productsCart: [],
  grand_total: 0,
  item_total: 0,
  vat_total:0,
  store_delivery_fee: 0,
  store_id: null,
  store_latitude : null,
  store_longitude : null
};

const reducer = (state = initialState, action) => {


  switch (action.type) {

    case types.ADD_REMOVE_WISH_SUCCESS:
      return Object.assign({}, state, {
        productsFavour: state.productsFavour.map(product => product.product_id === action.id
          ? { ...product, stockFavorite: action.WishStatus, isAnimatiingWish: false }
          : product,
        ),
      });

    case types.ADD_CART_SUCCESS:
      if( state.store_id === action.payload.store_id){
      const Already = state.productsCart.find(x => x.product_id === action.payload.product_id);
      const titly   = action.payload.cart_quantity === 0 ? state.productsCart.filter(item => item.product_id !== action.payload.product_id) :
      Already ? state.productsCart.map(product => product.product_id === action.payload.product_id
        ? { ...product, cart_quantity: action.payload.cart_quantity }
        : product,
      ) : [...state.productsCart, { ...action.payload }]

      return Object.assign({}, state, {
        productsCart: titly,
        cartAmount: total(titly)
      })
    }else{
      const titly   = [{ ...action.payload }]
      return Object.assign({}, state, {
        productsCart: titly,
        cartAmount: total(titly),
        store_id: action.payload.store_id
      })
    }


    case types.GET_CART_SUCCESS:
      return Object.assign({}, state, {
        productsCart: action.payload.products,
        grand_total: action.payload.grand_total,
        item_total: action.payload.item_total,
        vat_total:action.payload.vat_total,
        store_delivery_fee: action.payload.store_delivery_fee,
        store_id: action.payload.store_id,
        store_latitude: action.payload.store_latitude,
        store_longitude: action.payload.store_longitude,
      });

    default:
      return state;
  }
};

export default reducer;

function total ( list ){
  return list.reduce((acc, item) =>{
    const { cart_quantity, product_price } = item
    return acc + (cart_quantity * product_price)

  }, 0)


}