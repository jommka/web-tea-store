import React from "react";
import Footer from "./components/UI/Footer";
import './styles/App.css';
import './styles/Auth.css';
import './styles/Main.css';
import './styles/Shop.css';
import './styles/Basket.css';
import './styles/TeaItem.css';
import './styles/Error.css'
import './styles/ProductPage.css';
import './styles/Admin.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import BasketContextProvider from "./components/context/BasketContext";
import ShopContextProvider from "./components/context/ShopContext";

function App() {
  return (
      <BrowserRouter>
        <BasketContextProvider>
          <ShopContextProvider>
            <AppRouter/>
            <div className="Footer">
              <Footer />
            </div>
          </ShopContextProvider>
        </BasketContextProvider>
      </BrowserRouter>
  );
}

export default App;

