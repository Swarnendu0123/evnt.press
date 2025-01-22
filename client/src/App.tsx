import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Organization from "./pages/Organization";
import OrganizationBrowser from "./pages/OrganizationBrowser";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/org" element={<OrganizationBrowser />} />
        <Route path="/org/:id" element={<Organization />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
