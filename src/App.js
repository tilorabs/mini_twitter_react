import { Routes, Route, useParams } from "react-router-dom";
import Users from "./Users";
import Messages from "./Messages";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const {id} = useParams();
  return (
    <div className="App">
      <Header />
      <main>
        <Users uid={id}/>
        <Messages uid={id}/>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route exact path="/users/:id" element={<Layout />} />
      <Route exact path="/messages/:id" element={<Layout />} />
    </Routes>
  );
}

export default App;