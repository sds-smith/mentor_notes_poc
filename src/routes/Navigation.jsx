
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Navigation() {
  return (
    <div style={{position: 'relative', minHeight: '100vh', width: '100vw'}}>
        <Header />
        <Outlet />
    </div>
  )
}
