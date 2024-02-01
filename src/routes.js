import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listen from "./pages/Listen";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";

function routesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/listen/:id" element={ <Listen /> }></Route>
                <Route path="/Search" element={ <Search /> }></Route>
                <Route path="*" element={ <PageNotFound /> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default routesApp;