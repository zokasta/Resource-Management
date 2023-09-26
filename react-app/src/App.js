import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Pages/Login"

export default function App()
{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login></Login>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}