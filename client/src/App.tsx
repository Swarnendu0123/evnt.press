import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Organization from "./pages/org/Organization";
import OrganizationBrowser from "./pages/OrganizationBrowser";
import CreateEvent from "./pages/event/create/CreateEvent";
import Profile from "./pages/user/Profile";
import Event from "./pages/event/id/Event";

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

        {/* personal */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
