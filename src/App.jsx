import NavBar from "./component/NavBar.jsx";
import {BrowserRouter} from "react-router";
import AllRoutes from "./routes/AllRoutes.jsx";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <AllRoutes/>
            </BrowserRouter>
        </>)
}

export default App
