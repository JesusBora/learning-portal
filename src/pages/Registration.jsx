import React from 'react';
import RegistrationForm from '../components/auth/RegistrationForm';
import Image from '../components/common/ImageComponent';
import './styles/Registration.css';

const Registration = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 13);
    const maxDate = today.toISOString().split('T')[0];


    return (
        <main>
            <Image src="/images/trainer-reg.jpg" />
            <RegistrationForm maxDate={maxDate}/>
        </main>
    );
}

export default Registration;