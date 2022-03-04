//#region Libraries
import { 
    BrowserRouter, 
    Routes, 
    Route, 
    Navigate
} from "react-router-dom";
//#endregion
//#region Components
import Sidebar from "../views/components/Sidebar/Sidebar";
import Header from "../views/components/Header/Header";
import Main from "../views/components/Main/Main";
//#endregion
//#region Views
import Home from "../views/Home/Home";
import Events from "../views/Events/Events";
import Settings from "../views/Settings/Settings";
//#endregion

const Dashboard = () => {
    return (
        <BrowserRouter>
            <Sidebar/>
            <Header/>
            <Main>
                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="eventos/*" element={<Events/>}/>
                    <Route path="config" element={<Settings/>}/>
                    <Route 
                        path="*" 
                        element={<Navigate to="/home" replace={true}/>}/>
                </Routes>
            </Main>
        </BrowserRouter>
    )
}

export default Dashboard;