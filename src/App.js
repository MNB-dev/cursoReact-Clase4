import './App.css';
import Cabecera from './components/Cabecera';
import LabelsContext, { defaultLabels } from './context/LabelsContext';
import InfoPanel from './components/InfoPanel';
import BuyBitcoins from './components/BuyBitcoins';
import CalculadoraBitcoin from './components/CalculadoraBitcoin';
import BitcoinWalltet from './components/BitcoinWallter';

function App() {
  return (
    <LabelsContext.Provider value={defaultLabels}>
      <Cabecera />
      <InfoPanel />
      <BitcoinWalltet />
      <BuyBitcoins />
      <CalculadoraBitcoin />
    </LabelsContext.Provider>
  );
}

export default App;
