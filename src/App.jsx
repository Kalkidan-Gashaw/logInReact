 import React, {useState} from "react"
 import LoginForm from "./LoginForm.jsx"
 import UserDashboard from "./UserDashboard.jsx"
 import AdminDashboard from "./AdminDashboard.jsx"
 import ErrorMassage from "./ErrorMassage.jsx"
 

 
 function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAdmin(true);
      setIsLoggedIn(true);
      setShowError(false);
    } else if (username === "kalkidan" && password === "1234") {
      setIsAdmin(false);
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMassage  />}
      {isLoggedIn && !isAdmin && <UserDashboard username="Kalkidan"/>}
      {isLoggedIn && isAdmin && <AdminDashboard admin="Admin"/>}
    </div>
  );
 }
 
 export default App
 