import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Counter from './Compont/Counter'
import Theme from './Compont/Theme'

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.ThemeReducer);

  return (

    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <h1>Redux Builder</h1>
    <Theme />
    <Counter />
    </div>
  )
}

export default App
