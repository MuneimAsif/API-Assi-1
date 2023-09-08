import { BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
export default function Routing(){
return<>
<Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about/:id" element={<About/>}/>
    </Routes>
</Router>
</>
}