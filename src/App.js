import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import RegisterVisit from './RegisterVisit';
import SearchVisit from './SearchVisit';

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

export default App;