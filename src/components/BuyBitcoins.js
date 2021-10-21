//topdo junto por un tema didactico

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Provider, useDispatch , useSelector } from 'react-redux';
import { createStore } from 'redux';

//actions
const ADD_ONE_BITCOIN = "ADD_ONE_BITCOIN";
const REMOVE_BITCOIN = "REMOVE_BITCOIN";

//action creators
function actAddBitcoin(ammount = 1) {
  return {
    type: ADD_ONE_BITCOIN,
    ammount: ammount,
  };
}

function actRemoveBitcoin(ammount = 1) {
  return {
    type: REMOVE_BITCOIN,
    ammount: ammount,
  };
}

//reducer
function reducer(state, action) {
  let newState = { ...state };
  switch (action.type) {
    case ADD_ONE_BITCOIN:
      newState.bitcoin++;
      break;
    case REMOVE_BITCOIN:
      newState.bitcoin > 0 && newState.bitcoin--;
      break;
    default:
      break;
  }
  return newState;
}

//store
const store = createStore(reducer, { bitcoin: 0 });

const BitcoinCounter = () => {
  const bitcoins = useSelector((state) =>{
      return state.bitcoin;
  });

  const dispatch = useDispatch();

  return (
    <Box textAlign="center">
      <Typography varian="h6">
        <Button variant="outlined" onClick={() => {dispatch(actAddBitcoin())}}>+</Button>
        Bitcoins: {bitcoins}
        <Button variant="outlined" onClick={() => {dispatch(actRemoveBitcoin())}}>-</Button>
      </Typography>

      <Button variant="contained" onClick={() => {alert("Felicitaciones!")}}>Comprar</Button>
    </Box>
  );
};

const BuyBitcoins = () => {
  return (
    <Provider store={store}>
      <BitcoinCounter />
    </Provider>
  );
};

export default BuyBitcoins;
