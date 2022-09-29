import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import RoomListPage from "./pages/RoomListPage";
import RoomDetailsPage from "./pages/RoomDetailsPage";
import RoomEditPage from "./pages/RoomEditPage";
import ItemListPage from "./pages/ItemListPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import ItemEditPage from "./pages/ItemEditPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import isPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
     
    <h1>Hi from the Landing Page</h1>

    <Navbar />

    <Routes>
      <Route exact path="/" element={ <Homepage /> } />
      <Route exact path="/signup" element={ <IsAnon><SignupPage /></IsAnon> } />
      <Route exact path="/login" element={ <IsAnon><LoginPage /></IsAnon> } />
      <Route exact path="/rooms" element={ <RoomListPage /> } />
      <Route exact path="/rooms/:roomId" element={ <RoomDetailsPage /> } />
      <Route exact path="/rooms/edit/:roomId" element={ <isPrivate><RoomEditPage /></isPrivate>  } />
      <Route exact path="/items" element={ <ItemListPage /> } />
      <Route exact path="/items/:itemId" element={ <ItemDetailsPage /> } />
      <Route exact path="/items/edit/:itemId" element={ <isPrivate><ItemEditPage /></isPrivate>  } />
    </Routes>

    </div>
  );
}

export default App;
