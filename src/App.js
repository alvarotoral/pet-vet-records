import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <div className="App">
                {!isLoggedIn ? (
                    <Login onLogin={setIsLoggedIn} />
                ) : (
                    <div>
                        <h2>Welcome</h2>
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                        <Routes>
                            <Route path="/register" element={<RegisterVisit />} />
                            <Route path="/search" element={<SearchVisit />} />
                        </Routes>
                    </div>
                )}
            </div>
        </Router>
    );
};