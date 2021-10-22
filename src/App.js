import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes />
    </HashRouter>
  );
}
