import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Pages/Login";
import User from "./Pages/User";
import NoPage from "./Pages/NoPage"

export default function App()
{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login></Login>}></Route>
                    <Route path="/User" element={<User></User>}></Route>
                    <Route path="*" element={<NoPage></NoPage>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}