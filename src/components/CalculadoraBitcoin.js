import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo, useState } from "react";

function estimarBitcoinsRestantes(){ //operacion bloqueante
    let suma = 0;
    for (let i = 0; i < 999999999; i++) {
        suma +=i;
    }

    return suma;
}

const CalculadoraBitcoin = () => {
  const [refrescos, setRefrescos] = useState(0);
  const bitcoinsRestantes = useMemo(() =>(estimarBitcoinsRestantes(2)), [2]); //para evitar operacion bloqueante
  return (
    <Box textAlign="center">
      Bitcoin Restantes: {bitcoinsRestantes}
      <Button
        variant="contained"
        onClick={() => {
          setRefrescos(refrescos + 1);
        }}
      >
        Refrescar (Refresco {refrescos})
      </Button>
    </Box>
  );
};

export default CalculadoraBitcoin;
