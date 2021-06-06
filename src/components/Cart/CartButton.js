import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const totalItems = useSelector(state=>state.cart.totalQuantity);
  const dispatch = useDispatch();

  const btnClickHandler = () =>{
    dispatch(uiActions.toggle());

  }
  
  return (
    <button className={classes.button} onClick={btnClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
