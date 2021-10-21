import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";

const BitcoinWalltet = () => { //forma de manipular el DOM
    const input = useRef();
  return (
    <Box textAlign="center">
      <input type="text" ref={input} />
      <Button variant="outlined" onClick={() => { input.current.focus()}}>Hacer Foco (va)</Button>
      <Button variant="outlined" onClick={() => { input.current.value = "hola"}}>Crear Wallet</Button>
    </Box>
  );
};

export default BitcoinWalltet;
