import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Owner from "./pages/owner";
import Create from "./pages/create";
import Articles from "./pages/acticles";
import Edit from "./pages/edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<Owner/>} />
        <Route path="/:ownerId/create" element={<Create/>} />
        <Route path="/articles/:articleId" element={<Articles/>} />
        <Route path="/articles/:articleId/edit" element={<Edit/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
