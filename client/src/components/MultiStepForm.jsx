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

  console.log("Current Step:", step);
  console.log("Form Data:", formData);

  const saveStepData = data => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const steps = [
    { component: <GeneralInfoForm key="general" onSubmit={saveStepData} /> },
    { component: <SocialInfoForm key="social" onSubmit={saveStepData} gender={formData.gender} /> },
    { component: <PersonalMedicalHistory key="personal" onSubmit={saveStepData} /> },
    { component: <FamilyHistoryForm key="family" onSubmit={saveStepData} /> },
    // { component: <ComplaintsForm key="complaints" onSubmit={saveStepData} /> },
    { component: <LifestyleForm key="lifestyle" onSubmit={saveStepData} /> },
    { component: <MedicalHistoryForm key="medical" onSubmit={saveStepData} /> },
    { component: <DietaryPreferencesForm key="food" onSubmit={saveStepData} /> },
    { component: <TestNCollectionInfo key="testInfo" onSubmit={saveStepData} /> },
    { component: <SelectTests key="selectTest" onSubmit={saveStepData} /> },
    { component: <Confirmation key="confirmation" formData={formData} /> },
  ];

  console.log("Current Step:", step);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      {steps[step].component}
      <p style={{ textAlign: "right", }}>Page {step + 1} of {steps.length}</p>
    </div>
  )

};

export default MultiStepForm;
