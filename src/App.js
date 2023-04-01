import './App.scss';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//pages
import {Home,MealDetails,Error,Category} from "./pages/index";
// Components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/meal/:id' element={<MealDetails/>}/>
      <Route path='/meal/category/:name' element={<Category/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
