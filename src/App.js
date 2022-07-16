import { Routes, Route, useParams } from "react-router-dom";
import Users from "./Users";
import Messages from "./Messages";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const {id} = useParams();
  return (
    <div className="App">
      <Header />
      <main>
        <Users mode={props.usermode} uid={id}/>
        <Messages mode={props.msgmode} uid={id}/>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout msgmode="all" usermode="all"/>} />
      <Route exact path="/users/:id" element={<Layout msgmode="byUser" usermode="byUser"/>} />
      <Route exact path="/messages/:id" element={<Layout msgmode="byMessage" usermode="byMessage"/>} />
    </Routes>
  );
}

export default App;