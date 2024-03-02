import React from "react";
import { AuthProvider } from "./src/authContext/authContext";
import { Router } from "./src/presentation/navigation/router";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
