import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import RegisterVisit from './components/RegisterVisit';
import SearchVisit from './components/SearchVisit';
import 'primereact/resources/themes/saga-blue/theme.css';  // Or any other theme
import 'primereact/resources/primereact.min.css';          // Core CSS
import 'primeicons/primeicons.css';                        // PrimeIcons

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