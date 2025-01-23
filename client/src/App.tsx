import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Organization from "./pages/org/Organization";
import OrganizationBrowser from "./pages/OrganizationBrowser";
import Event from "./pages/Event";
import CreateEvent from "./pages/event/create/CreateEvent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* org pages */}
        <Route path="/org" element={<OrganizationBrowser />} />
        <Route path="/org/:id" element={<Organization />} />
        
        {/* event pages */}
        <Route path="/event/:id" element={<Event />} />
        <Route path="/event/create" element={<CreateEvent />} />
      </Routes>
    </>
  );
}

export default App;
