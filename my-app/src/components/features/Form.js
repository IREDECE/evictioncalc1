

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExplanationText from '../ExplanationText';  // Make sure the path is correct
import styled from 'styled-components';
import './TitleStyle.css'; 
import Tooltip from '../Tooltip';
import StateSelector from './StateSelector';


import localImage1 from '../../assets/images/appendix1.png';
import localImage2 from '../../assets/images/CalculationAverageVisit.png';
import localImage3 from '../../assets/images/fcCost.png';
import localImage4 from '../../assets/images/childErCost.png'
import localImage5 from '../../assets/images/child10-19.png'
import localImage6 from '../../assets/images/cityEncampCost.png'

// Styled components
const FormContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const StyledForm = styled.form`
  margin-top: 20px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #004494;
  }
`;

function Form() {
  const [data, setData] = useState(() => {
      // Retrieve data from session storage or set default values
      const savedData = sessionStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : {
          evictionPercentage: '',
          dailyCostIndiv: '',
          dailyCostFamily:'',
          shelterDays: '',
          ERpercent: '',
          ERonlyhomeless: '',
          dailyERCost: '',
          averageERVisit: '',
          icPercent: '',
          IConlyhomeless: '',
          icCost: '',
          icDays: '',
          fosterPercent: '',
          fcCost: '',
          fcStay: '',
          childErPercent: '',
          childErCost: '',
          childErFreq: '',
          childArrestPercent: '',
          childArrestCost: '',
          childArrestDays: '',
          avgEncampCost: ''
      };
  });

  const [showShelterCost, setShowShelterCost] = useState(false); // State for managing visibility of Shelter Cost part
  const [showMedicalCost, setShowMedicalCost] = useState(false);
  const [showChildCost, setShowChildCost] = useState(false);
  const [showEncampmentCost, setShowEncampmentCost] = useState(false);
  const navigate = useNavigate();

    useEffect(() => {
      sessionStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        navigate('/review', { state: { data } });
        // console.log(data);
    };

    const toggleShelterCost = () => setShowShelterCost(!showShelterCost); // Toggle visibility function
    const toggleMedicalCost = () => setShowMedicalCost(!showMedicalCost);
    const toggleChildCost = () => setShowChildCost(!showChildCost);
    const toggleEncampmentCost = () => setShowEncampmentCost(!showEncampmentCost);

    const ERFrenquencyCalculation = [
      [
        "Based on a systematic review by Vohra, N., et al. (2022) that looked at 36 studies, the frequency of ER visits by homeless individuals ranged from 0.41% to 0.96% of total ER visits, with individual frequencies varying from 0.72 to 5.8 visits per year."
      ],
      [
        "40.4% of the homeless sampled had one or more ER visits per year.",
        "High-use respondents, making up 7.9% of this group, accounted for 54.5% of all ER visits, averaging approximately 6.9 visits per year.",
        "Lower-use respondents accounted for the remainder, averaging about 1.4 visits per year."
      ]
    ];

    return (
        <FormContainer>
            <Title>Cost of Eviction Calculator 2024</Title>
            <StyledForm onSubmit = {handleSubmit}>

              <div className="title-container">
                <i className="fas fa-info-circle title-icon"></i>
                <span>From the demographics</span>
              </div>

              <StateSelector />

              <ExplanationText
                  title = "Further understanding the evicted demographics:"
                  text = "According to Appendix Figure S1.B of the research, about 47% of evicted households do not have children. From Figure S1.A, the average evicted household size is calculated at 2.8 members, consisting of 1.2 adults listed in eviction filings, 0.5 adults unlisted, and 1.1 children under 18."
                  imgSrc= {localImage1}
              />

              <div className="title-container">
                <i className={`fas ${showShelterCost ? 'fa-chevron-down' : 'fa-chevron-right'} title-icon`} onClick={toggleShelterCost}></i>
                  <i className="fas fa-info-circle title-icon"></i>
                    <span>Shelter Cost part</span>
                    <p> * <Tooltip content="The relationship between eviction and subsequent shelter use involves various outcomes. While some evicted households may find temporary accommodations with friends, relatives, or in hotels, others may resort to homeless shelters. Initially, we might expect a relatively low percentage of evicted individuals to turn to shelters." /> </p> 
              </div>

              {showShelterCost && (
                <><FormField>
                <Label htmlFor="evictionPercentage">Percentage of evictions leading to shelter needs</Label>
                <Input type="number" id="evictionPercentage" name="evictionPercentage" value = {data.evictionPercentage} onChange={handleChange} placeholder="Enter a percentage"/>
            </FormField>

            <ExplanationText
                text = "<p>Staff at Robin Hood suggested that 25% of evicted individuals experienced homelessness in non-pandemic times (2014). We consider this figure likely inflated due to underreporting of informal housing solutions, barriers to accessing shelters, availability of alternative housing programs, and shifts in housing policies. A more localized study in Hennepin County (2018) utilizing interviews and public records indicated that only about 10% of those with an eviction filing accessed county-funded shelters within three years post-eviction. This lower estimate seems more realistic based on the data.</p>"
                referenceRange = "around 10%"
            />

            <FormField>
                <Label htmlFor="dailyCostIndiv">Please enter the cost per bed per day in shelters for individuals</Label>
                <Input type="number" id="dailyCostIndiv" name="dailyCostIndiv" value = {data.dailyCostIndiv} onChange={handleChange} placeholder="Enter the cost"/>
            </FormField>

            <FormField>
                <Label htmlFor="dailyCost">Please enter the cost per bed per day in shelters for families</Label>
                <Input type="number" id="dailyCostFamily" name="dailyCostFamily" value = {data.dailyCostFamily} onChange={handleChange} placeholder="Enter the cost"/>
            </FormField>

            <ExplanationText
                text = "<p>The financial implications of providing shelter vary between families and single adults, primarily due to differing needs such as privacy. According to research by Culhane et al. (2021), there are variations in the average, median, and modal costs nationwide. Given the high shelter costs driven by mandatory provisions in New York City and Massachusetts, we adopted the modal figure of $17,742 per year for families and $14,064 for individuals. This approach mitigates the skewing effect of exceptionally high costs in specific locales.</p><p>Make sure you are using the cost in 2024. For inflation adjustments, visit https://www.usinflationcalculator.com/.</p>"
                referenceRange = "Inflation adjusted for 2024, the cost of shelter per bed per year for families is $23,509, $64.4 per day. Adjusted cost of shelter for individuals per year is $18,636, $51.05 per day."
            />

            <FormField>
                <Label htmlFor="shelterDays">Please enter the average days a homeless person stays in shelter</Label>
                <Input type="number" id="shelterDays" name="shelterDays" value = {data.shelterDays} onChange={handleChange} placeholder="Enter the number of days"/>
            </FormField>

            <ExplanationText
                text = "Analysis by Hao H, Garfield M, and Purao S. (2022) indicates an average shelter stay of 77 days, with a median of 30 days and a maximum of 5,030 days. We use the average of 77 days for our calculations as it encompasses the full range of durations and provides a comprehensive representation of shelter usage. This duration translates to approximately 0.211 years. "
            />
                </>
              )}

              <div className="title-container">
              <i className={`fas ${showMedicalCost ? 'fa-chevron-down' : 'fa-chevron-right'} title-icon`} onClick={toggleMedicalCost}></i>
                <i className="fas fa-info-circle title-icon"></i>
                <span>Medical Costs for adults</span>
              </div>

              {showMedicalCost && (
                <><ExplanationText
                  title = "Connections between ER and Inpatient care for homeless people: Why are we dividing the medical cost into these two categories?"
                  text = "For the evicted population, emergency room (ER) visits and inpatient hospital care are intrinsically linked. Research by Karaca Z, Wong H, et al. (2013) demonstrates that nearly three-quarters of inpatient hospital stays for homeless individuals originate in the ER, compared to half for the non-homeless demographic. This correlation is further supported by findings from Brian J. Moore et al. (2020). Given the financial constraints faced by many in the evicted population, the affordability of inpatient care is a significant challenge. Under the Emergency Medical Treatment and Active Labor Act, hospitals are required to treat or stabilize any individual facing an emergency, irrespective of their insurance status or financial capability. This legal obligation suggests a higher propensity for the evicted to utilize ER services over inpatient care, as ER treatment is guaranteed in urgent situations."
                  
              />

              {/* <ExplanationText
                  subcategories={[
                    {
                      title: "ER Cost"
                    }
                  ]}
                    /> */}

              <div className="title-container2">
                <span>-  ER Cost</span>
              </div>

              <FormField>
                  <Label htmlFor="ERpercent">Please enter the percentage of homeless individuals utilizing ER services:
                  </Label>
                  <Input type="number" id="ERpercent" name="ERpercent" value = {data.ERpercent} onChange={handleChange} placeholder="Enter a percentage"/>
              </FormField>

              <ExplanationText
                  text = "A 2020 SRR report, drawing on earlier research by Kushel, estimated that approximately 32% of homeless individuals utilized emergency room services. This figure is based on data collected in 1996 across various homeless assistance programs nationwide. A subsequent 2002 study by Kushel focused on San Francisco and found that 40.4% of homeless individuals had at least one ER visit in the previous year. We chose the more conservative 32% estimate as it is likely more representative of the national situation, considering its broader geographic sample and temporal context."
                  referenceRange = "30-40%"
              />

              <FormField>
                  <Label htmlFor="ERonlyhomeless">Please enter the percentage of ER visits that would not occur if the individuals were not experiencing homelessness:
                  </Label>
                  <Input type="number" id="ERonlyhomeless" name="ERonlyhomeless" value = {data.ERonlyhomeless} onChange={handleChange} placeholder="Enter a percentage"/>
              </FormField>

              <ExplanationText
                  text = "SRR report (2020) also includes that approximately 75% of people experiencing homelessness and utilize ER solely because of their homelessness."
                  referenceRange = "Only SRR has numbers related to this. I used one of their reports from Baltimore and found the result to be 60%. 60-80% would be a reasonable range to reference."
              />

              <FormField>
                  <Label htmlFor="dailyERCost">Please enter the average cost of ER visit per day:
                  </Label>
                  <Input type="number" id="dailyERCost" name="dailyERCost" value = {data.dailyERCost} onChange={handleChange} placeholder="Enter the cost"/>
              </FormField>

              <ExplanationText
                  text = "<p>According to a 2019 report from UnitedHealth Group, the average cost for treating conditions typically manageable in primary care settings but treated in the ER is $2,032 per visit.</p> <p>visit https://www.usinflationcalculator.com/.</p>"
                  referenceRange = "Adjusting $2,032 for inflation in 2024, the cost would be $2,542."
              />

              <FormField>
                  <Label htmlFor="averageERVisit">Enter average number of times a homeless person visits ER a year:
                  </Label>
                  <Input type="number" id="averageERVisit" name="averageERVisit" value = {data.averageERVisit} onChange={handleChange} placeholder="Enter average number of times"/>
              </FormField>

              <ExplanationText
                  title = "Estimating the frequency of ER visits:"
                  text="Kushel's 2002 research provided a deeper insight into these visits:"
                  lists={ERFrenquencyCalculation}
                  imgSrc= {localImage2}
                  referenceRange = "Within the range of 2-5."
              />

              <div className="title-container2">
                <span>-  Inpatient Care Cost</span>
              </div>

              <FormField>
                  <Label htmlFor="icPercent">Please enter the percentage of homeless individuals using inpatient care:
                  </Label>
                  <Input type="number" id="icPercent" name="icPercent" value = {data.icPercent} onChange={handleChange} placeholder="Enter a percentage"/>
              </FormField>

              <ExplanationText
                  title = "Inpatient Care Utilization Among Homeless Populations:"
                  text="From available data, about 23% of individuals experiencing homelessness use inpatient care services. This estimate is supported by two studies: Kushel's 2001 research and Lebrun-Harris et al.'s 2012 study, which both reported similar utilization rates of approximately 23%. Given the consistency across these studies, we have adopted a slightly adjusted rate of 23.3% for inpatient care usage."
                  referenceRange = "23.3%"
              />

              <FormField>
                  <Label htmlFor="IConlyhomeless">Please enter the percentage of inpatient care visits that would not occur if the individuals were not experiencing homelessness:
                  </Label>
                  <Input type="number" id="IConlyhomeless" name="IConlyhomeless" value = {data.IConlyhomeless} onChange={handleChange} placeholder="Enter a percentage"/>
              </FormField>

              <ExplanationText
                  text="According to the 2020 SRR report, a substantial 80% of inpatient care utilized by the homeless is directly attributable to their housing instability. This significant percentage underscores the profound impact homelessness has on healthcare needs and utilization."
                  referenceRange = "Similarly as the question for ER visit, I found this number to be around 57.4% using SRR's Baltimore study. But 50-80% would be a reasonable range."
              />

              <FormField>
                  <Label htmlFor="icCost">Please enter the average daily cost of an inpatient hospital visit:
                  </Label>
                  <Input type="number" id="icCost" name="icCost" value = {data.icCost} onChange={handleChange} placeholder="Enter the cost"/>
              </FormField>

              <ExplanationText
                  text="<p>The Kaiser Family Foundation (KFF) in 2022 estimated the average daily cost of an inpatient hospital visit to be $2,857. This figure is crucial for calculating the total expenditure on hospital stays for homeless individuals, emphasizing the financial burden placed on healthcare systems by housing instability.</p><p> Make sure you are using value of 2024, visit https://www.usinflationcalculator.com/.</p>"
                  referenceRange = "$2,857 in 2022 is $3,067 in 2024 after adjusting for inflation."
              />

              <FormField>
                  <Label htmlFor="icDays">Please enter the average number of days a homeless person stays in inpatient care:
                  </Label>
                  <Input type="number" id="icDays" name="icDays" value = {data.icDays} onChange={handleChange} placeholder="Enter the number of days"/>
              </FormField>

              <ExplanationText
                  text="Research by Kimberly Rollings et al. (2022), examining data from the 2017-2019 National Inpatient Sample, found that the average hospital stay for individuals identified with housing instability ranges around 6.7 days. This duration provides an insight into the extent of care required, often more extended due to the exacerbated health conditions associated with homelessness."
                  referenceRange = "(6+1.5)/(6-1.5) days. Wadhera et al. (2019) also found that mean length of stay by homeless individuals are 6.5 days."
              />

              <ExplanationText
                title="Verifying the Usage of ER and Inpatient Care Services Among Homeless Populations"
                text="Research conducted by Karaca Z, Wong H, et al. (2013) reveals that approximately three-quarters of inpatient hospital stays among homeless individuals begin in the ER. Although the specific data on the conversion rate from ER visits to inpatient admissions is lacking, Karaca's findings provide a basis to infer the interaction between ER use and subsequent inpatient care among the homeless."
                lists={[
                  [
                    "32% of homeless individuals utilize ER services.",
                    "23.3% are reported to use inpatient care services."
                  ]
                ]}
                calculations="<p>To verify the consistency between these statistics and Karaca's finding that 75% of inpatient stays originate from ER visits, we can calculate the expected percentage of ER visits leading to inpatient care: </p><p>32% x 75% = 24%. </p><p>This calculated percentage of 24% aligns closely with the observed 23.3% utilization rate of inpatient care, suggesting a strong correlation between ER visits and subsequent inpatient admissions among the homeless.</p>"
              /></>
              )}

                <div className="title-container">
                  <i className={`fas ${showChildCost ? 'fa-chevron-down' : 'fa-chevron-right'} title-icon`} onClick={toggleChildCost}></i>
                    <i className="fas fa-info-circle title-icon"></i>
                      <span>Children's cost</span>
                </div>

                {showChildCost && (
                  <><ExplanationText
                  text="Here, we divided the costs related to children facing eviction into 3 parts: foster care costs, medical costs, and juvenile delinquency costs."
              />

              <div className="title-container2">
                <span>Foster Care</span>
              </div>

              <ExplanationText
                text="There is a significant relationship between foster care out-of-home placements and evicted individuals."
                lists={[
                  [
                    "Research in Sweden found that children who experience eviction constitute a disadvantaged group and are at significant risk of being separated from their parents and placed in out-of -home care. The Sweden database identifies approximately 4 percent of evicted children who were placed in foster care compared to 0.3 percent of non-evicted children. ",
                    "In US, a 2022 study pointed out that home evictions are associated with child welfare system involvement as: Parents subject to home eviction may experience distress in parenting, and can increase the likelihood of children maltreatment, parents subject to eviction may face long working hours to cover the rent and living expenses, and may be unable to afford childcare. Eviction process may increase the visibility of such circumstances and these children may get noticed. The study pointed out a relationship between foster care entries and eviction that one additional eviction per 100 renters-occupied homes in a county is associated with a 1.6% increase in foster care entries and one additional eviction filing per 100 renter-occupied homes in a county was associated with a 0.6% increase in foster care entries."
                  ]
                ]}
              />

              <FormField>
                  <Label htmlFor="fosterPercent">Please enter the percentage of homeless families who received child welfare services:
                  </Label>
                  <Input type="number" id="fosterPercent" name="fosterPercent" value = {data.fosterPercent} onChange={handleChange} placeholder="Enter a percentage"/>
              </FormField>

              <ExplanationText
                
                lists={[
                  [
                    "Bassuk et al (1997) found that 19% of preschool-aged children in homeless families had been placed in foster care, as compared to 8% of the low-income children; ",
                    "Nunez (1994) found that 35% of 398 families in NYC have an open child welfare services supervision case and 20% have one or more children in foster care.",
                    "A more recent study by Park et al (2004) found that 16% of families entering the emergency shelter system received out-of-home foster-care placement."
                  ]
                ]}
              />

              <ExplanationText
                text="For the following reasons, we believe that 16% is more reasonable:"
                lists={[
                  [
                    "Out-of-home care specifically refers to situations where children are placed in settings outside their immediate family, such as with foster families, group homes, or residential facilities. This distinction is important because it directly measures the impact of homelessness on the most vulnerable—children who cannot remain in their family unit due to safety or welfare concerns.",
                    "Out-of-home placements are typically considered in more severe circumstances, and for homeless families, this measurement can highlight the acute needs and risks faced by children, rather than broader foster care metrics that might include preventive or temporary interventions."
                  ]
                ]}
                referenceRange = "M.Shinn found that the rates of child separations ranged across sites from 9% to 24% of children."
              />

            <FormField>
                <Label htmlFor="fcCost">Please enter the average per person per year cost of foster care:
                </Label>
                <Input type="number" id="fcCost" name="fcCost" value = {data.fcCost} onChange={handleChange} placeholder="Enter the cost"/>
            </FormField>

            <ExplanationText
                title = "Determining the average cost of foster care:"
                text = "For help in adjusting inflation, visit https://www.usinflationcalculator.com/."
                imgSrc= {localImage3}
                lists={[
                  [
                    "A report (2019) from Alia estimated the costs of foster care per year (shown in the figure below):",
                    "Because we believe that the medical costs are already included in our calculation for children's ER and inpatient care, we revisited the study by Zill (2011) and found that the total of maintenance costs and administrative costs per child per year was $25,782 ($19,107 plus $6,675) in 2011. "
                  ]
                ]}
                referenceRange = "$25,782 is $36,010 in 2024 after adjusting for inflation."
            />

            <FormField>
                <Label htmlFor="fcStay">Please enter the average length a child stays in foster care:
                </Label>
                <Input type="number" id="fcStay" name="fcStay" value = {data.fcStay} onChange={handleChange} placeholder="Enter the number of years:"/>
            </FormField>

            <ExplanationText
                title = "Determining the average cost of foster care:"
                text = "The AFCARS Report in 2021 found that the mean time a child stays in foster care is 21.9 months, median care in care is 17.5 months. We rounded 21.9 to 22. 22 months is about 1.83 years. If you want to find out the cost in the year after, input 1."
            />

            <div className="title-container2">
              <span>Medical Cost for Children</span>
            </div> 

            <ExplanationText
                text = "A study by M.Shinn (2011) found that hospitalization rates do not differ by housing status. Hence we are only focusing on the costs of emergency department visits by homeless children. Emergency department visits are more affected by housing status for the following reasons:"
                lists={[
                  [
                    "Acute care needs: Wright summarized that the most common disorders among homeless children were upper respiratory infections (42% vs 22% in the national sample), minor skin ailments (20% vs 5% in the national sample), ear disorders (18% vs 12% in the national sample). These health conditions associated with homelessness are often of an acute nature that necessitates immediate, episodic care, which ERs are designed to provide",
                    "Barriers for hospitalization: Homeless children and their families might face stigma or discrimination when accessing regular healthcare services. ERs are less likely to present these barriers, as they are required to treat all emergencies regardless of a patient’s background.",
                    "Unstable living condition: ERs provide 24/7 care without the need for an appointment, which is particularly valuable for the homeless population who may face challenges in scheduling and keeping appointments due to their unstable living conditions. Continuity is crucial in healthcare as a lot of chronic conditions require follow-ups. However, homelessness disrupts this continuity, leading to reliance on ERs where no prior medical history or ongoing treatment plans are required for immediate care."
                  ]
                ]}
            />

            <FormField>
                <Label htmlFor="childErPercent">Please enter the percentage of homeless children who used ER in the past year:
                </Label>
                <Input type="number" id="childErPercent" name="childErPercent" value = {data.childErPercent} onChange={handleChange} placeholder="Enter a percentage:"/>
            </FormField>

            <ExplanationText
                title = "Determining children's ER visit rate:"
                text = "According to M.Shinn (2011), formerly homeless children's ER usage is 14% compared to 6%. In addition to this, L.Chang et al (2023) found that frequent ER use is common among homeless children: 22.1% vs 4.3% who were housed. Frequent ER use is defined as more than 4 visits a year."
                lists={[
                  [
                    "We recommend using Shinn's estimate that 14% of homeless children use ER."
                  ]
                ]}
                referenceRange = "10-20%"
            />

            <FormField>
                <Label htmlFor="childErCost">Please enter the average cost of ER visit for a child:
                </Label>
                <Input type="number" id="childErCost" name="childErCost" value = {data.childErCost} onChange={handleChange} placeholder="Enter the cost:"/>
            </FormField>

            <ExplanationText
                title = "Determining the average cost of child's ER visit:"
                imgSrc= {localImage4}
                text = "<p>Before researching the cost of ER, we first hypothesized that the average cost per ER visit is less than the ER visit cost for adults. A study by D.Young substantiated our hypothesis confirming that the costs of managing children are typically less than for adults with the same normal condition. In university hospitals, there tends to be less use of laboratory, radiology, and pharmacy services for children than for adults.</p><p>For inflation adjustments, visit visit https://www.usinflationcalculator.com/.</p>"
                lists={[
                  [
                    "From a report by the Pediatric Readiness Group in 2022, the mean cost for acute care for children is $1155."
                  ]
                ]}
                referenceRange = "$1,155 adjusting for inflation is $1,240 in 2024."
            />

            <FormField>
                <Label htmlFor="childErFreq">Please enter the average number of times a child visits ER in a year:
                </Label>
                <Input type="number" id="childErFreq" name="childErFreq" value = {data.childErFreq} onChange={handleChange} placeholder="Enter a number:"/>
            </FormField>

            <ExplanationText
                title = "Determining the ER visit frequency for children:"
                text = "There are no specific visit frequency found for homeless children. With L.Chang's finding, we suspect that the ER visit rate for homeless children with frequent ER use may be a little more than the adults. We suggest using the same ER visit rate as the homeless adults 2.48 times a year, but this may be an underestimate."
            />

            <div className="title-container2">
              <span>Juvenile Delinquency</span>
            </div> 

            <ExplanationText
                title = "How does eviction impact juvenile delinquency?"
                text = "Juvenile delinquency is intricately linked to eviction in several ways, often through the effects of housing instability and the stresses it imposes on families and children. Evictions often lead to frequent relocations for families. This instability can disrupt children's social networks and continuity in education, which are crucial for healthy development and socialization. When families are threatened by eviction, households are paying more attention to maintaining the family’s financial stability and children may be neglected and unsupervised. Evicted families might find themselves in less safe neighborhoods due to limited affordable housing options. Living in areas with higher crime rates and fewer community resources can expose children to delinquent behaviors and influences."
                lists={[
                  [
                    "The trauma and anxiety associated with losing one's home can have profound psychological effects on children, including depression, anxiety, and behavioral problems. These emotional and mental health issues can be demonstrated as externalizing behaviors, including aggression and delinquency.",
                    "The Office of juvenile justice and delinquency prevention (2023) has found that 4.2 million youth and young adults are estimated to experience homelessness each year, and about 57 percent of those youth are estimated to have prior records of foster care, juvenile justice involvement, or both.",
                    "What's more, juvenile delinquency is associated with future likelihood of re-entering homelessness. The Prison Policy Initiative found that people who have been incarcerated are 7 times as likely to experience homelessness than a member of the public. This functions as a negative loop, driving up the societal cost of solving homelessness and people have less chances of improving their living conditions after becoming homelessness. "
                  ]
                ]}
            />

            <ExplanationText
                title = "Finding the percentage of children faving eviction that are likely to commit acts of delinquency. "
                text = "We revisited Carl's research on the demographic information for the evicted population and found that children aged between 0-9 is about 24%, children aged between 10-19 is about 20.5% of the total population facing eviction. We selected youth between the ages of 10-19 because they are the most likely groups who may commit acts of delinquency resulting in detention. About 46% of all children aged between 0-19 are between the ages of 10-19. "
                imgSrc= {localImage5}
            />

            <FormField>
                <Label htmlFor="childArrestPercent">Please enter the percentage of homeless youth who are arrested after being homeless:
                </Label>
                <Input type="number" id="childArrestPercent" name="childArrestPercent" value = {data.childArrestPercent} onChange={handleChange} placeholder="Enter a percentage:"/>
            </FormField>

            <ExplanationText
                title = "Some studies about this percentage: "
                lists={[
                  [
                    "According to the Youth Homelessness and Juvenile System Involvement (2023), Recent estimates suggest that 46% of youth who have experienced homelessness have been held in juvenile detention centers at some point, relative to 15% of youth in the general population.",
                    "The Reentry and Housing Coalition found that more than 25% of people experiencing homelessness report being arrested for activities that are a direct result of their homelessness. ",
                    "Chapple et al.(2004) found that 25% of homeless youth in the Midwest Homeless and Runaway Adolescent Project had not been arrested before becoming homeless but were arrested at least once after becoming homeless (2004) ",
                    "With these three sources, we believe that the percentage of youth arrested being homeless is around 25%, with the third source being the closest estimate as it considers the additional difference in being arrested before and after youth becoming homeless."
                  ]
                ]}
                referenceRange = "25-40%"
            />

            <FormField>
                <Label htmlFor="childArrestCost">Please enter the average cost per day of juvenile detention:
                </Label>
                <Input type="number" id="childArrestCost" name="childArrestCost" value = {data.childArrestCost} onChange={handleChange} placeholder="Enter the cost:"/>
            </FormField>

            <ExplanationText
                title = "Suggestions for this cost: "
                text = "<p>According to a report by the Justice Policy Institute, the cost of juvenile detention per day was $407.58 in 2014.</p><p>For help adjusting inflation, visit https://www.usinflationcalculator.com/.</p>"
            />

            <FormField>
                <Label htmlFor="childArrestDays">Please enter the average number of days a child remains in juvenile detention:
                </Label>
                <Input type="number" id="childArrestDays" name="childArrestDays" value = {data.childArrestDays} onChange={handleChange} placeholder="Enter the number of days:"/>
            </FormField>

            <ExplanationText
                text = "<p>According to the U.S. Department of Justice (2019), half of all youth committed to public facilities for an offense remained in placement after 112 days (115 for private facilities)."
            />
            
            </>

            
                )}

              <div className="title-container">
                <i className={`fas ${showEncampmentCost ? 'fa-chevron-down' : 'fa-chevron-right'} title-icon`} onClick={toggleEncampmentCost}></i>
                  <i className="fas fa-info-circle title-icon"></i>
                    <span>Cost of City Encampments</span>
              </div> 

              {showEncampmentCost && (

              <><ExplanationText
              title = "What is encampment? "
              text = "Encampment is another temporary solution to homelessness for those who are unsheltered. Tars (2017) defined encampment as “a group living arrangement in a public location involving semi-permanent shelters and storage of possessions”. Although there isn’t a common definition for encampment, it is generally held that people living in encampments have improved access to jobs, food, and services."
          />

          <ExplanationText
              title = "Why is eviction related "
              text = "Eviction and encampment are closely connected in a broader context of housing instability and homelessness. When families or individuals are evicted and cannot secure other affordable housing options, many may end up in homeless encampments. After being evicted and entering the condition of homelessness, people start resorting to shelters where they can stay as a temporary solution to their housing. Although a larger proportion of people find shelter, there are still people who remain unsheltered."
          />

          <ExplanationText
              title = "Examples of encampment spendings "
              text = "The presence of encampments can lead to increased community costs. Local governments spend money on policing, cleaning, and occasionally dismantling these encampments."
              lists={[
                [
                  "Oakland's 2017-2019 proposed budget includes a $1.14 million budget for cleanup crews and $250,000, and a plan to leverage an additional $1.8 million—to operate the city’s indoor and outdoor Safe Haven Navigation Centers.",
                  "Reported in 2016, Honolulu spent $15,000 per week on encampment sweeps. ",
                  "A lot of the costs associated with city enforcements cannot be directly included. For example, Tars (2017) also pointed out that thousands of dollars are spent to make certain areas less accessible to people entering unsheltered homelessness, such as building fences, bars, rocks, spikes, and other architectures. There are also indirect costs related to public health, safety, and the potential decrease in nearby property values."
                ]
              ]}
          />

          <ExplanationText
              title = "Revisiting the demographics "
              text = "<p>Most of the costs for encampments are focusing on the unsheltered people. Encampment costs do not exist for those who are already being placed in homeless shelters. To calculate the encampment cost, we need to revisit the demographics and estimate the size of the unsheltered homeless population caused by eviction.</p><p>Earlier in the calculations of shelter, children, and healthcare cost of eviction, we used the percentage of people becoming homelessness who are threatened by eviction. We used 10% from the study in Hennepin county, which tracks all of its residents facing eviction and their shelter entrance rate between 2008-2017. Hennepin county is one of the few areas in the US (others including Boston, Washington D.C) that has a “Right to Shelter” jurisdiction. This means that all homeless people in Hennepin county by jurisdiction ought to be sheltered. Theoretically, the total shelter entrance rate in Hennepin county should be very close to the entire population that suffers from homelessness. For Hennepin county, the percentage of shelter entry may be 10%, but since the majority of states and counties do not have such jurisdiction, the shelter entry rate may be smaller than 10%.</p><p>"
          />

          <ExplanationText
              title = "Revisiting the demographics "
              text = "<p>The National Alliance to End Homelessness in their State of Homelessness 2023 edition found that 40% of people experiencing homelessness live unsheltered.</p><p>By “Right to Shelter” Jurisdiction, Hennepin accepts all homeless people to shelter, and we collected from the research published in 2018 that 10% of eviction filings in Hennepin result in sheltered homelessness.</p><p>Hennepin county also did another report on characteristics and trends of homelessness and discovered that 791 out of 4072 homeless people remain unsheltered, consisting of 19.4% (roughly 20%) of the homeless population. </p>"
              calculations = "<p>In Hennepin: 10% eviction-related entries out of 80% sheltered gives us a ratio of </p><p>10/80 = 0.125</p><p>Applying a similar proportion to the 60% sheltered rate in other areas gives </p><p>0.125 × 60%=7.5%</p><p>7.5% is describing how many people facing eviction end up in shelters in regions without a right to shelter policy, using Hennepin's efficiency as a benchmark.</p><p>Because 10% of eviction filings in Hennepin lead to homelessness, of which 80% of the homeless people are sheltered, this gives us:</p><p>10% × 80% = 8% of people are sheltered and are homeless.</p><p>8% - 7.5% = 0.5%</p><p>This means that 0.5% of the total population threatened by eviction are eventually unsheltered.<p>7.6 million × 0.5% = 38000</p><p>Every year, about 38000 people are unsheltered because of eviction.</p>"
          />

          <ExplanationText
              title = "Verification for the size for evicted unsheltered population estimate"
              text = "<p>Based on our calculations, we concluded that every year, there are 38000 people unsheltered because of eviction.</p><p>In 2022, there are 233,832 individuals experiencing unsheltered homelessness. 38000 is about 16% of the population.</p><p>A study on the unsheltered homeless population in Los Angeles county (2023) found that 22% unsheltered population lost housing due to eviction.</p>"
          />

          <FormField>
              <Label htmlFor="avgEncampCost">Please enter the cost per person per day for encampment:
              </Label>
              <Input type="number" id="avgEncampCost" name="avgEncampCost" value = {data.avgEncampCost} onChange={handleChange} placeholder="Enter the cost per person per year for encampment:"/>
          </FormField>

          <ExplanationText
              title = "Determining the average cost for city encampments:"
              text = "<p>In a report “Exploring Homelessness Among People Living in Encampments and Associated Cost” by the US Department of Housing and Urban Development in 2020, four cities with encampments were studied and their expenditures are listed below in the chart.</p><p>To determine the average cost per unsheltered individual,  we added the total spendings on encampment activities in these 4 cities altogether and divided the total by the sum of the unsheltered homeless population in these 4 cities. We concluded that the average cost per unsheltered homeless person in 2019 is $1,700.</p><p>For help on inflation adjustment, visit https://www.usinflationcalculator.com/.</p>"
              imgSrc={localImage6}
              referenceRange = "$1,700 in 2019 is $2,089 in 2024 after adjusting for inflation."
          /></>
            )}

              <button type="submit">Submit</button>
            </StyledForm>
        </FormContainer>

    );
}

export default Form;













