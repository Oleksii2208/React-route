import { Routes, Route, NavLink } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import NotFound from "../../pages/NotFound/NotFound";
import s from "./App.module.css";
// import Home from "../../pages/Home/Home";
// import About from "../../pages/About/About";
// import Products from "../../pages/Products/Products";
// import ProductDetails from "../../pages/ProductDetails/ProductDetails";
// import Mission from "../Mission/Mission";
// import Team from "../Team/Team";
// import Reviews from "../Reviews/Reviews";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Products = lazy(() => import("../../pages/Products/Products"));
const ProductDetails = lazy(() =>
  import("../../pages/ProductDetails/ProductDetails")
);
const Mission = lazy(() => import("../Mission/Mission"));
const Team = lazy(() => import("../Team/Team"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const App = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
