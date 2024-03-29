import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) =>{
  return(
    <div className={classes.CheckoutSummary}>
      <h1> Wishing you a nice meal </h1>
      <div style={{width: '100%',  margin:'auto'}}>
          <Burger ingredients={props.ingredients}/>
      </div>
      <Button
      btnType='Danger'
      clicked={props.checkoutCancelled}> GO BACK </Button>
      <Button btnType='Success'
      clicked={props.checkoutContinued}> PLACE ORDER </Button>

    </div>
  )
}

export default checkoutSummary;
