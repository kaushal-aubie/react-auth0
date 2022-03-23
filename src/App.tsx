import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import {LoginButton, LogoutButton, Profile} from "./components";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
