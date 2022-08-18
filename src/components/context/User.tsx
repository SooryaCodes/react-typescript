import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = () =>
    setUser({
      name: "Soorya",
      email: "soorya@gmail.com",
    });
  const handleLogout = () => setUser(null);
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      &nbsp;
      <button onClick={handleLogout}>Logout</button>
      <br />
      <span>
        Welcome {user?.name}, your email is {user?.email}.
      </span>
    </div>
  );
}
