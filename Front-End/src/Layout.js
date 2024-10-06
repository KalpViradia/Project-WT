import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsBoard from "./NewsBoard";
import NavBar from "./NavBar";
import NewsDetail from "./NewsDetail";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<NewsBoard />} />
                <Route path="/category/:category" element={<NewsBoard />} />
                <Route path="/news/:id" element={<NewsDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
