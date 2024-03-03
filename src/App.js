import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import ContextWrapper from "./context/ContextWrapper";

function App() {
  return (
    <ContextWrapper>
      <>
        <Header />
        <Outlet />
      </>
    </ContextWrapper>
  );
}

export default App;
