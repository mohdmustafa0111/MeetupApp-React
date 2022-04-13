import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favourite from "./pages/Favourite";
import Layout from "./components/layouts/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoritesContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetups />} />
            <Route path="/new-meetup" element={<NewMeetups />} />
            <Route path="/favorites" element={<Favourite />} />
          </Routes>
        </Layout>
      </Router>
    </FavoritesContextProvider>
  );
}

export default App;
