import './App.css';
import NavBar from './Components/NavBar';
import Newspage from './Components/Newspage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
    <>
    <NavBar/>
    <Routes>
          <Route exact  path="/" element={<Newspage key="general" pagesize={9} category="general" country="in"/>}></Route>
          <Route exact  path="/business" element={<Newspage key="business" pagesize={9} category="business" country="in"/>}></Route>
          <Route exact  path="/health" element={<Newspage key="health" pagesize={9} category="health" country="in"/>}></Route>
          <Route exact  path="/entertainment" element={<Newspage key="entertainment" pagesize={9} category="entertainment" country="in"/>}></Route>
          <Route exact  path="/science" element={<Newspage key="science" pagesize={9} category="science" country="in"/>}></Route>
          <Route exact  path="/sports" element={<Newspage key="sports" pagesize={9} category="sports" country="in"/>}></Route>
          <Route exact  path="/technology" element={<Newspage key="technology" pagesize={9} category="technology" country="in"/>}></Route>
    </Routes>
    </>
    </Router>
  )
}

export default App;
