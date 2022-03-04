import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Loading from "./loading";
import UseRefBasics from "./pages/useRef";
import Bind from "./pages/bind";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/useRef" element={<UseRefBasics />} />
          <Route path="/bind" element={<Bind />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
