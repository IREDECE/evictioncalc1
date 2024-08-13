
import React, { useState, useEffect } from 'react';
import './calculatePage.css';

function CostCalculator({ data }) {
    const [shelterCost, setShelterCost] = useState(0);
    const [medicalCost, setMedicalCost] = useState(0);

    useEffect(() => {
        calculateCosts();
    }, [data]);

    function calculateCosts() {
        // Destructure data for easier access
        const {
            numberEvicted, evictionPercentage, dailyCost, shelterDays,
            ERpercent, ERonlyhomeless, dailyERCost, averageERVisit,
            icPercent, IConlyhomeless, icCost, icDays
        } = data;

        // Convert percentages from human-readable percent to decimal for calculation
        const evictionRate = evictionPercentage / 100;
        const erRate = ERpercent / 100;
        const icRate = icPercent / 100;

        // Shelter Cost Calculation
        const calculatedShelterCost = numberEvicted * evictionRate * dailyCost * shelterDays;
        setShelterCost(calculatedShelterCost);

        // Medical Cost Calculation
        const calculatedMedicalCost = (
            numberEvicted * evictionRate * erRate * ERonlyhomeless * dailyERCost * averageERVisit +
            numberEvicted * evictionRate * icRate * IConlyhomeless * icCost * icDays
        );
        setMedicalCost(calculatedMedicalCost);
    }

    return (
        <div>
            <h1>Cost Calculations</h1>
            <div>
                <h2>Shelter Cost: ${shelterCost.toLocaleString()}</h2>
                <h2>Medical Cost: ${medicalCost.toLocaleString()}</h2>
            </div>
        </div>
    );
}

export default CostCalculator;
