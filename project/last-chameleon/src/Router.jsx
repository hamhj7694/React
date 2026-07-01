import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import GameComponent from "./components/GameComponent";

function MyRouter() {
  return (
    <BrowserRouter basename="/last-chameleon">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/game" element={<GameComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;