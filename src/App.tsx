import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_HOMEPAGE}>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
