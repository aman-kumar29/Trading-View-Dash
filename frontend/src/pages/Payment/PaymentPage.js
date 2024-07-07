import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './paymentPage.module.css'; // Import your CSS file for styling
import Title from '../../components/Title/Title.js';
import Button from '../../components/Button/Button.js';

const PaymentPage = () => {
    const location = useLocation();
    const { selectedPlan } = location.state;

    const [step, setStep] = useState(1);
    const [utrNumber, setUtrNumber] = useState('');
    const [screenshot, setScreenshot] = useState(null);

    const handleNextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    const handleSubmitPayment = () => {
        if (utrNumber && screenshot) {
            console.log(`UTR: ${utrNumber}, Screenshot: ${screenshot.name}`);
            // Handle submission logic here
        }
    };

    return (
        <div className="payment-container">
            <div className="step-content">
                <div className="progress-bar">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>QR Code</div>
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>Enter UTR</div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>Submit</div>
                </div>
                {step === 1 && (
                    <div>
                        <Title text={`Payment for ${selectedPlan.title}`} />
                        <div className="qr-code">
                            <img src="qr-code-placeholder.png" alt="QR Code" />
                            <p>UPI ID: your-upi-id@bank</p>
                        </div>
                        <Button text="Next" onClick={handleNextStep} />
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <Title text="Enter UTR and Upload Screenshot" />
                        <input
                            type="text"
                            placeholder="Enter UTR Number"
                            value={utrNumber}
                            onChange={(e) => setUtrNumber(e.target.value)}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setScreenshot(e.target.files[0])}
                        />
                        <Button text="Next" onClick={handleNextStep} />
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <Title text="Review and Submit" />
                        <p>Plan: {selectedPlan.title}</p>
                        <p>UTR: {utrNumber}</p>
                        <p>Screenshot: {screenshot?.name}</p>
                        <Button text="Submit" onClick={handleSubmitPayment} />
                    </div>
                )}
                {step > 1 && <Button text="Back" onClick={handlePreviousStep} />}
            </div>
            {window.innerWidth >= 900 && (
                <div className="static-image">
                    <img src="./login_side.png" alt="Background Image" />
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
