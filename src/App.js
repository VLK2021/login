import {Route, Routes} from "react-router-dom";

import Layout from "./components/Leyout/Layout";
import FormLogin from "./components/FormLogin/FormLogin";
import Users from "./components/Users/Users";
import Guest from "./components/Guest/Guest";
import './App.css';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<FormLogin/>}/>
                </Route>
                <Route path={'/user'} element={<Users/>}/>
                <Route path={'/guest'} element={<Guest/>}/>
            </Routes>
        </div>
    );
}

export default App;
