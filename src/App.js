import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Footer />
      </BrowserRouter>
   );
}

export default App;
