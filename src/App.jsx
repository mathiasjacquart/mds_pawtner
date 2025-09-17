import { useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home";
import Match from "./pages/Match";
import Message from "./pages/Message";
import Profile from "./pages/Profile";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "matches":
        return <Match />;
      case "messages":
        return <Message />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto pb-16">{renderPage()}</main>
      <Header activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
