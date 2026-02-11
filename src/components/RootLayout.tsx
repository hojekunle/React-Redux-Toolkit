import { Outlet } from "react-router-dom"
import NavBar from "./NavBarPanel"

const RootLayout = () => {
  return (
    <div>
        <div className="row">
            <NavBar />
        </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
