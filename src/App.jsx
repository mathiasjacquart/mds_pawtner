import { useState } from "react";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [activePage, setActivePage] = useState("/");

  return (
    <div className="flex flex-col h-screen bg-light-bg">
      <main className="flex-1 overflow-y-auto pb-16 font-primary">
        <Outlet />
      </main>
      <Header activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
