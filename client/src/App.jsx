
import './App.css'
import MultiStepForm from './components/MultiStepForm';

// import { ComplaintsForm } from './components/ComplaintForm';

// import { FamilyHistoryForm } from './components/FamilyHistoryForm';
// import { DietaryPreferencesForm } from './components/DietaryPreferencesForm';
// import { GeneralInfoForm } from './components/GeneralInfoForm';
// import { LifestyleForm } from './components/LifestyleForm';
// import { MedicalHistoryForm } from './components/MedicalHistoryForm';
// import { SocialInfoForm } from './components/SocialInfoForm';
// import { Confirmation } from './components/Confirmation';
// import { PersonalMedicalHistory } from './components/PersonalMedicalHistoryForm';
// import { TestNCollectionInfo } from './components/TestNCollectionInfo';
// import { SelectTests } from './components/SelectTests';

function App() {

  return (

    <main>

      <p style={{
        textAlign: "center",
        background: "linear-gradient(to right, #76AF44, #76AF44)",
        padding: "1em 0em",
        margin: "0em",
        color: "white",
        fontSize: "1.5em",
        fontWeight: "500",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.15)",
        borderBottomLeftRadius: "1em",
        borderBottomRightRadius: "1em",
      }}>Home Sample Collection Form</p>

      <MultiStepForm />

      <footer style={{
        background: "linear-gradient(to right, #76AF4499, #76AF44)",
        padding: "1rem",
        fontWeight: "500",
        boxShadow: "0 -4px -8px 0 rgba(0, 0, 0, 0.2), 0 -6px -20px 0 rgba(0, 0, 0, 0.19)",
        borderTopLeftRadius: "1em",
        borderTopRightRadius: "1em",
      }}>
        <p style={{ textAlign: "center", textDecoration: "underline", }}>Tricorder Diagnostics Pvt Ltd</p>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", }}>
          <span>Contact Us:</span>
          <span>8457874585</span>
          <span>Email ID:</span>
          <span>support@tricroderdiagnostics.com</span>
          <span>Address:</span>
          <span>Flat # 201 & 202 2nd Floor, Siri Sampada Arcade III, behind Union Bank of India, Khajaguda, Telangana 500032</span>
        </section>

      </footer>

      {/* <GeneralInfoForm />
      <SocialInfoForm />
      <PersonalMedicalHistory />
      <FamilyHistoryForm />
      <ComplaintsForm /> This Page is still available, but is not required for the time being
      <LifestyleForm />
      <MedicalHistoryForm />
      <DietaryPreferencesForm />
      <TestNCollectionInfo />
      <SelectTests />
      <Confirmation /> */}

    </main>

  )
}

export default App;