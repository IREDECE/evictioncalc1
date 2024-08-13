import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

function CostCalculator() {
    const location = useLocation();
    const data = location.state?.data || {};
    console.log("Received data:", data); 

    const [shelterCost, setShelterCost] = useState(0);
    const [medicalCost, setMedicalCost] = useState(0);
    const [childCost, setChildCost] = useState(0);
    const [childMedCost, setChildMedCost] = useState(0);
    const [childDelinqCost, setChildDelinqCost] = useState(0);
    const [childFosterCost, setChildFosterCost] = useState(0);

    const calculateCosts = useCallback(() => {
        const {
            numberEvicted = 100, numChildEvicted = 50, numHouseEvicted = 50, evictionPercentage = 0, dailyCost = 0, shelterDays = 0, 
            ERpercent = 0, ERonlyhomeless = 0, dailyERCost = 0, averageERVisit = 0, avgNumChildInFamily = 2.02,
            icPercent = 0, IConlyhomeless = 0, icCost = 0, icDays = 0, 
            fosterPercent = 0, fcCost = 0, fcStay = 0, 
            childErPercent = 0, childErCost = 0, childErFreq = 0, 
            childArrestPercent = 0, childArrestCost = 0, childArrestDays = 0, 
            teenChildRate = 0.46, avgEncampCost = 0 // This might need to be defined or passed in data if it changes
        } = data;

        const evictionRate = Number(evictionPercentage) / 100;
        const childErRate = Number(childErPercent) / 100;
        const fosterRate = Number(fosterPercent) / 100;
        const childArrestRate = Number(childArrestPercent) / 100;

        const calculatedShelterCost = numberEvicted * evictionRate * dailyCost * shelterDays;
        const calculatedMedicalCost = (
            numberEvicted * evictionRate * (Number(ERpercent) / 100) * ERonlyhomeless * dailyERCost * averageERVisit +
            numberEvicted * evictionRate * (Number(icPercent) / 100) * IConlyhomeless * icCost * icDays
        );

        const calculatedChildMedCost = numChildEvicted * evictionRate * childErRate * (childErRate - 0.06) * childErCost * childErFreq;
        const calculatedChildDelinqCost = numChildEvicted * evictionRate * teenChildRate * childArrestRate * childArrestCost * childArrestDays;
        const calculatedChildFosterCost = numHouseEvicted * evictionRate * avgNumChildInFamily * fosterRate * fcCost * fcStay;

        const totalChildCost = calculatedChildMedCost + calculatedChildDelinqCost + calculatedChildFosterCost;

        setShelterCost(calculatedShelterCost);
        setMedicalCost(calculatedMedicalCost);
        setChildCost(totalChildCost);
        setChildMedCost(calculatedChildMedCost);
        setChildDelinqCost(calculatedChildDelinqCost);
        setChildFosterCost(calculatedChildFosterCost);

        console.log("Calculated Costs:", { shelterCost: calculatedShelterCost, medicalCost: calculatedMedicalCost, childCost: totalChildCost });
    }, [data]); 

    useEffect(() => {
        calculateCosts();
    }, [calculateCosts]);

    return (
        <div className="container">
            <h1 className="title">Cost Calculations</h1>
            <div className="cost-item">
                <span className="cost-label">Shelter Cost:</span>
                <span className="cost-value">${shelterCost.toLocaleString()}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">Medical Cost:</span>
                <span className="cost-value">${medicalCost.toLocaleString()}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">Child Costs:</span>
                <span className="cost-value">${childCost.toLocaleString()}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">Child Medical Cost:</span>
                <span className="cost-value">${childMedCost.toLocaleString()}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">Child Delinquency Cost:</span>
                <span className="cost-value">${childDelinqCost.toLocaleString()}</span>
            </div>
            <div className="cost-item">
                <span className="cost-label">Child Foster Cost:</span>
                <span className="cost-value">${childFosterCost.toLocaleString()}</span>
            </div>
        </div>
    );
}

export default CostCalculator;
