import { useState } from "react"
import { GeneralInfoForm } from "./GeneralInfoForm";
import { SocialInfoForm } from "./SocialInfoForm";
import { FamilyHistoryForm } from "./FamilyHistoryForm";
// import { ComplaintsForm } from "./ComplaintForm";
import { LifestyleForm } from "./LifestyleForm";
import { MedicalHistoryForm } from "./MedicalHistoryForm";
import { DietaryPreferencesForm } from "./DietaryPreferencesForm";
import { Confirmation } from "./Confirmation";
import { PersonalMedicalHistory } from "./PersonalMedicalHistoryForm";
import { TestNCollectionInfo } from "./TestNCollectionInfo";
import { SelectTests } from "./SelectTests";


const MultiStepForm = () => {

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const saveStepData = data => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const steps = [
    { component: <GeneralInfoForm key="general" onSubmit={data => saveStepData({ generalInfo: data })} /> },
    { component: <SocialInfoForm key="social" onSubmit={data => saveStepData({ socialInfo: data })} gender={formData.gender} /> },
    { component: <PersonalMedicalHistory key="personal" onSubmit={data => saveStepData({ personalMedical: data })} /> },
    { component: <FamilyHistoryForm key="family" onSubmit={data => saveStepData({ familyHistory: data })} /> },
    // { component: <ComplaintsForm key="complaints" onSubmit={data=> saveStepData({generalInfo:data})} /> },
    { component: <LifestyleForm key="lifestyle" onSubmit={data => saveStepData({ lifeStyle: data })} /> },
    { component: <MedicalHistoryForm key="medical" onSubmit={data => saveStepData({ medicalHistory: data })} /> },
    { component: <DietaryPreferencesForm key="food" onSubmit={data => saveStepData({ dietaryPreference: data })} /> },
    { component: <TestNCollectionInfo key="testInfo" onSubmit={data => saveStepData({ testNCollection: data })} /> },
    { component: <SelectTests key="selectTest" onSubmit={data => saveStepData({ testsInfo: data })} /> },
    { component: <Confirmation key="confirmation" formData={formData} /> },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      {steps[step].component}
      <p style={{ textAlign: "right", }}>Page {step + 1} of {steps.length}</p>
    </div>
  )

};

export default MultiStepForm;
