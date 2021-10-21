import { AppBar, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import { MenuIcon } from '@mui/icons-material/Menu';
import useLabelContext from "../hooks/useLabelContext";

const Cabecera = (props) => {
    const labels = useLabelContext();

  return (
    <AppBar position="static">
      <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
          </IconButton>
        <Typography variant="h4"> {labels.titulo}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Cabecera;
