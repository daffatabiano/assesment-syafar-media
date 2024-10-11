import { useRoutes } from 'react-router-dom';
import './index.css';
import { routeLists } from './routes/routes';

function App() {
  const element = useRoutes(routeLists);

  return element;
}

export default App;
