import './App.css';
import Header from "./component/Header"
import MenuNavBar from "./component/MenuNavBar";
import ProductList from "./component/ProductList"


function App() {
  return (
    <>
    <div className='main-container'>
    <Header />
    <MenuNavBar/>
    <ProductList />
    </div>
   
    </>
  )
}

export default App;
