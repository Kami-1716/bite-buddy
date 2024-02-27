import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home</Layout>} />
    </Routes>
  );
};

export default AppRoutes;
