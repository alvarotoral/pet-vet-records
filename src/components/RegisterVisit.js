import React, { useState } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const RegisterVisit = () => {
    const [petName, setPetName] = useState('');
    const [visitDate, setVisitDate] = useState('');
    const [vetName, setVetName] = useState('');
    const [reason, setReason] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post('/api/PetVisit/register', {
                petName,
                visitDate,
                vetName,
                reason,
                notes
            });
            alert('Visit registered successfully!');
        } catch (error) {
            console.error('Error registering visit', error);
        }
    };

    return (
        <div>
            <h2>Register Pet Visit</h2>
            <InputText value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Pet Name" />
            <InputText value={visitDate} onChange={(e) => setVisitDate(e.target.value)} placeholder="Visit Date" />
            <InputText value={vetName} onChange={(e) => setVetName(e.target.value)} placeholder="Vet Name" />
            <InputText value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" />
            <InputText value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
            <Button label="Register Visit" onClick={handleSubmit} />
        </div>
    );
};

export default RegisterVisit;