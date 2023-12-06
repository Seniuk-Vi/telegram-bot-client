import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from "antd";
import HeaderComponent from "./components/header/HeaderComponent";
import React from "react";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import {PrivateRoute} from "./routes/PrivateRoute";
import Logout from "./components/auth/logout/Logout";

function App() {
    return (
        <Layout className={"app-layout"}>
            <BrowserRouter>
                <div className={"app-header"}>
                    <HeaderComponent/>
                </div>
                <div className={"app-content"}>
                    <Routes>
                        <Route path={"/auth"} Component={AuthPage}/>
                        <Route path={"/logout"} Component={Logout}/>
                        <Route path={"/"} element={<PrivateRoute component={HomePage}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
