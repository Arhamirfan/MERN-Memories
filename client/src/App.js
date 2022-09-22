import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RoutePaths from "./Common/paths";
function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePaths.home} element={<Home />} />
        <Route path={RoutePaths.about} element={<About />} />
        <Route path={RoutePaths.contact} element={<Contact />} />
        <Route path={RoutePaths.login} element={<Login />} />
        <Route path={RoutePaths.signup} element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
