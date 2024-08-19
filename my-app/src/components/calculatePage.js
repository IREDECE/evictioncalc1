import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
// import { useEvictionData } from './EvictionContext';

function CostCalculator() {
    // const { evictionData } = useEvictionData();
    const location = useLocation();
    const data = location.state?.data || {};

    const [shelterCost, setShelterCost] = useState(0);
    const [individualShelterCost, setIndividualShelterCost] = useState(0);
    const [familyShelterCost, setFamilyShelterCost] = useState(0);
    const [medicalCost, setMedicalCost] = useState(0);
    const [adultERCost, setAdultERCost] = useState(0);
    const [adultInpatientCost, setAdultInpatientCost] = useState(0);
    const [childCost, setChildCost] = useState(0);
    const [childMedCost, setChildMedCost] = useState(0);
    const [childDelinqCost, setChildDelinqCost] = useState(0);
    const [childFosterCost, setChildFosterCost] = useState(0);
    const [encampmentCost, setEncampmentCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const calculateCosts = useCallback(() => {
        const {
            numberEvicted = 7600000, numChildEvicted = 2900000, numWithChild = 5442700, numWithoutChild = 2542700, evictionPercentage = 0, dailyCostIndiv = 0, dailyCostFamily = 0, shelterDays = 0, 
            ERpercent = 0, ERonlyhomeless = 0, dailyERCost = 0, averageERVisit = 0, avgNumChildInFamily = 2.02, numHouseEvictedWithChild = 1431000,
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

        const adultsEvicted = numberEvicted - numChildEvicted;

        const calculatedIndividualShelterCost = numWithoutChild * evictionRate * dailyCostIndiv * shelterDays;
        const calculatedFamilyShelterCost = numWithChild * evictionRate * dailyCostFamily * shelterDays;
        const totalShelterCost = calculatedIndividualShelterCost + calculatedFamilyShelterCost;


        const calculatedAdultERCost = adultsEvicted * evictionRate * (Number(ERpercent) / 100) * (Number(ERonlyhomeless) / 100) * dailyERCost * averageERVisit;
        const calculatedAdultInpatientCost = adultsEvicted * evictionRate * (Number(icPercent) / 100) * (Number(IConlyhomeless) / 100) * icCost * icDays;
        const totalMedicalCost = calculatedAdultERCost + calculatedAdultInpatientCost;

        const calculatedChildMedCost = numChildEvicted * evictionRate * childErRate * (childErRate - 0.06) / childErRate * childErCost * childErFreq;
        const calculatedChildDelinqCost = numChildEvicted * evictionRate * teenChildRate * childArrestRate * childArrestCost * childArrestDays;
        const calculatedChildFosterCost = numHouseEvictedWithChild * evictionRate * avgNumChildInFamily * fosterRate * fcCost * fcStay;

        const totalChildCost = calculatedChildMedCost + calculatedChildDelinqCost + calculatedChildFosterCost;

        const calculatedEncampmentCost = numberEvicted * 0.005 * avgEncampCost;

        const totalEvictionCost = totalShelterCost + totalMedicalCost + totalChildCost + calculatedEncampmentCost;
        
        setShelterCost(totalShelterCost);
        setIndividualShelterCost(calculatedIndividualShelterCost);
        setFamilyShelterCost(calculatedFamilyShelterCost);
        setMedicalCost(totalMedicalCost);
        setAdultERCost(calculatedAdultERCost);
        setAdultInpatientCost(calculatedAdultInpatientCost);
        setChildCost(totalChildCost);
        setChildMedCost(calculatedChildMedCost);
        setChildDelinqCost(calculatedChildDelinqCost);
        setChildFosterCost(calculatedChildFosterCost);
        setEncampmentCost(calculatedEncampmentCost);
        setTotalCost(totalEvictionCost);

        console.log("Calculated Costs:", { 
            individual: calculatedIndividualShelterCost,
            family: calculatedFamilyShelterCost,
            total: totalShelterCost, 
            medicalCost: totalMedicalCost, 
            ERCost: calculatedAdultERCost,
            inpatientCost: calculatedAdultInpatientCost,
            childCost: totalChildCost });
    }, [data]); 

    useEffect(() => {
        calculateCosts();
    }, [calculateCosts]);

    return (
        <div className="container">
            <h1 className="title">Cost Calculations</h1>
            <div className="category-box">
                <h2 className="category-title">Shelter Costs</h2>
                <div className="cost-detail">Individual Shelter Cost: ${individualShelterCost.toLocaleString()}</div>
                <div className="cost-detail">Family Shelter Cost: ${familyShelterCost.toLocaleString()}</div>
                <div className="total">Total Shelter Cost: ${shelterCost.toLocaleString()}</div>
            </div>
            <div className="category-box">
                <h2 className="category-title">Medical Costs</h2>
                <div className="cost-detail">Adult ER Cost: ${adultERCost.toLocaleString()}</div>
                <div className="cost-detail">Adult Inpatient Care Cost: ${adultInpatientCost.toLocaleString()}</div>
                <div className="total">Total Medical Cost: ${medicalCost.toLocaleString()}</div>
            </div>
            <div className="category-box">
                <h2 className="category-title">Child Costs</h2>
                <div className="cost-detail">Child Medical Cost: ${childMedCost.toLocaleString()}</div>
                <div className="cost-detail">Child Delinquency Cost: ${childDelinqCost.toLocaleString()}</div>
                <div className="cost-detail">Child Foster Cost: ${childFosterCost.toLocaleString()}</div>
                <div className="total">Total Child Costs: ${childCost.toLocaleString()}</div>
            </div>
            <div className="category-box">
                <h2 className="category-title">Encampment Costs</h2>
                <div className="total">Total Encampment Cost: ${encampmentCost.toLocaleString()}</div>
            </div>
            <div className="total-cost-box">
                <div className="total">Total Cost of Eviction: ${totalCost.toLocaleString()}</div>
            </div>
        </div>
    );
}


export default CostCalculator;
