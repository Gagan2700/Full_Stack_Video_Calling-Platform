import Landingpage from "./Pages/Landingpage"
import Signup from "./Pages/Signup"
import Login  from "./Pages/Login"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Signup/>
    </div>
  )
}

export default App