import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listen from "./pages/Listen";

function routesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/listen" element={ <Listen /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default routesApp;