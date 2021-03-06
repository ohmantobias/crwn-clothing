import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default CartDropdown;
