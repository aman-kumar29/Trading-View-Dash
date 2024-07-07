import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './paymentPage.module.css'; // Import your CSS file for styling
import { Container, Typography, Button, Stepper, Step, StepLabel, Box, TextField } from '@mui/material';
import { Form, Card, Row, Col } from 'react-bootstrap';
import PlanCard from '../../components/PlanCard/PlanCard';

const PaymentPage = () => {
    const location = useLocation();
    const { selectedPlan } = location.state || {};

    const [activeStep, setActiveStep] = useState(0);
    const [utrNumber, setUtrNumber] = useState('');
    const [screenshot, setScreenshot] = useState(null);
    const [copied, setCopied] = useState(false);
    const [paymentRequestStatus, setPaymentRequestStatus] = useState('idle');

    const steps = ['Scan QR and Copy UPI ID', 'Enter UTR and Upload Proof', 'Submit Payment'];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleUtrChange = (e) => {
        setUtrNumber(e.target.value);
    };

    const handleScreenshotChange = (e) => {
        setScreenshot(e.target.files[0]);
    };

    const copyUPI = () => {
        navigator.clipboard.writeText('tata.invest@ybl');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmitPayment = () => {
        if (utrNumber && screenshot) {
            console.log(`UTR: ${utrNumber}, Screenshot: ${screenshot.name}`);
            // Handle submission logic here
        }
    };

    const handlePaymentApprovalRequest = () => {
        setPaymentRequestStatus('processing');
        // Simulate API call
        setTimeout(() => {
            setPaymentRequestStatus('success');
        }, 2000);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <center>
                        <PlanCard
                            key={selectedPlan.id}
                            title={selectedPlan.title}
                            price={selectedPlan.price}
                            duration={selectedPlan.duration}
                            member={selectedPlan.member}
                        />

                        <Box textAlign="center">
                            <Typography variant="h6">Step 1: Scan QR Code</Typography>
                            <img src="./qr.jpeg" alt="QR Code" className="mb-2" style={{ width: '200px', height: '200px' }} />
                            <Typography variant="body1">UPI ID: tata.invest@ybl</Typography>
                            <Button onClick={copyUPI} variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                {copied ? 'Copied' : 'Copy UPI ID'}
                            </Button>
                        </Box>
                    </center>
                );
            case 1:
                return (
                    <Form>
                        <Form.Group className="mb-3">
                            <Typography variant="h6">Step 2: Enter UTR Number</Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                label="UTR Number"
                                value={utrNumber}
                                onChange={handleUtrChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Typography variant="h6">Upload Proof of Payment</Typography>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleScreenshotChange}
                                style={{ display: 'none' }}
                                id="upload-button"
                            />
                            <label htmlFor="upload-button">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                            {screenshot && (
                                <Box mt={2}>
                                    <img src={URL.createObjectURL(screenshot)} alt="Proof For Payment" height={"200px"} />
                                </Box>
                            )}
                        </Form.Group>
                    </Form>
                );
            case 2:
                return (
                    <Box textAlign="center">
                        <Typography variant="h6">Step 3: Submit Payment</Typography>
                        {paymentRequestStatus === 'idle' ? (
                            <Button onClick={handlePaymentApprovalRequest} variant="contained" color="primary">
                                Request Payment Approval
                            </Button>
                        ) : paymentRequestStatus === 'processing' ? (
                            <Typography variant="body1">
                                <i className="fa-solid fa-spinner fa-spin"></i> Processing Payment Request...
                            </Typography>
                        ) : paymentRequestStatus === 'success' ? (
                            <Typography variant="body1" style={{ color: 'green' }}>
                                Payment Approval Request Sent Successfully! Please wait, your requested amount will be updated soon.
                            </Typography>
                        ) : paymentRequestStatus === 'failed' ? (
                            <Typography variant="body1" style={{ color: 'red' }}>
                                Payment Approval Request Failed! Please try again or contact support for assistance.
                            </Typography>
                        ) : null}
                    </Box>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container className="payment-container">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box mt={4}>
                {activeStep === steps.length ? (
                    <Typography variant="h5" className="text-center">
                        All steps completed
                    </Typography>
                ) : (
                    <>
                        <Card className="bg-light shadow-sm rounded-lg p-4">
                            {getStepContent(activeStep)}
                        </Card>
                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <Button disabled={activeStep === 0} onClick={handleBack} variant="contained">
                                Back
                            </Button>
                            {activeStep < steps.length - 1 ? (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    disabled={activeStep === 0 && !selectedPlan}
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button variant="contained" color="primary" onClick={handleSubmitPayment}>
                                    Submit
                                </Button>
                            )}
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
};

export default PaymentPage;
