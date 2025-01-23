import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import MarketPlace from "./pages/MarketPlace";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
      </Route>
    </Routes>
  );
};

export default App;
