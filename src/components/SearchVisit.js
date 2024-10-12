import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SearchVisit = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/PetVisit/search?term=${searchTerm}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error searching visits', error);
        }
    };

    return (
        <div>
            <h2>Search Pet Visits</h2>
            <InputText value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
            <Button label="Search" onClick={handleSearch} />
            <div>
                {results.map((visit) => (
                    <div key={visit.visitId}>
                        <p>{visit.petName} - {visit.visitDate} - {visit.vetName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchVisit;