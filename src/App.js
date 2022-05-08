import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Leyout/Layout";
import FormLogin from "./components/FormLogin/FormLogin";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<FormLogin/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
