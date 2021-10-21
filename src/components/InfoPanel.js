import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from '../hooks/useFetch';

const InfoPanel = () => {
/*   const [ data, setData ] = useState("");

  useEffect(() => {
    axios.get('https://breakingbadapi.com/api/quote/random').then((res) => {
        setData(res.data[0].quote + " - " + res.data[0].author)
    });
  }, []); */
  const res = useFetch("https://breakingbadapi.com/api/quote/random", "");
  const data = res[0]?.quote + " - " + res[0]?.author;

  return (
    <Box textAlign="center" margin="2em">
      <Typography variant="h1">{data}</Typography>
    </Box>
  );
};

export default InfoPanel;
