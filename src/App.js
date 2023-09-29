import './App.css';
import Login from "./security/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OAuth2Redirect from "./security/OAuth2Redirect";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path="/oauth2/redirect" element={<OAuth2Redirect />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
