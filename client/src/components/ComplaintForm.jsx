
// src/components/ComplaintsForm.jsx
import { useForm } from "react-hook-form";

export const ComplaintsForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = data => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>
      
        <legend><h2>Complaints</h2></legend>

        <label>
          Do you have any of these symptoms?
          <div style={{ marginLeft: "0.5rem" }}>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Shortness of Breath" {...register("symptoms")} /> Shortness of Breath</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Dizzy or drowsy" {...register("symptoms")} /> Dizzy or drowsy</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Allergies" {...register("symptoms")} /> Allergies</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Back Pain" {...register("symptoms")} /> Back Pain</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Digestive complaints" {...register("symptoms")} /> Digestive complaints</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Dry Eyes, Loss of" {...register("symptoms")} /> Dry Eyes, Loss of</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Headaches / Migraine" {...register("symptoms")} /> Headaches / Migraine</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Chronic Pancreatitis" {...register("symptoms")} /> Chronic Pancreatitis</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="None" {...register("symptoms")} /> None</span></label>
          </div>
        </label>

        <label>
          Frequent Complaints:
          <div style={{ marginLeft: "0.5rem" }}>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Frequent Hunger" {...register("frequentComplaints")} /> Frequent Hunger</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Paresthesia" {...register("frequentComplaints")} /> Paresthesia (Burning sensation, Tingling)</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Frequent Urination" {...register("frequentComplaints")} /> Frequent Urination</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Palpitations" {...register("frequentComplaints")} /> Palpitations</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Coughs" {...register("frequentComplaints")} /> Coughs</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Constipation" {...register("frequentComplaints")} /> Difficulties in bowel movement (Constipation)</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Muscle cramps" {...register("frequentComplaints")} /> Muscle cramps</span></label>
          </div>
        </label>

        <label>
          Were you diagnosed with any of the below?
          <div style={{ marginLeft: "0.5rem" }}>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Cancers" {...register("diagnosedWith")} /> Cancers</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Asthma" {...register("diagnosedWith")} /> Asthma</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Mental Illness" {...register("diagnosedWith")} /> Mental Illness</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Heart Problems" {...register("diagnosedWith")} /> Heart Problems</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Stroke" {...register("diagnosedWith")} /> Stroke</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Thyroid" {...register("diagnosedWith")} /> Thyroid</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="Arthritis" {...register("diagnosedWith")} /> Arthritis</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="checkbox" value="None" {...register("diagnosedWith")} /> None</span></label>
            <label style={{ padding: "0.1em", }}><span style={{ display: "flex", alignItems: "center", }}><input type="text" placeholder="Other (please specify)" {...register("diagnosedOther")} /></span></label>
          </div>
        </label>

        <button type="submit">Save & Continue</button>

      </fieldset>

    </form>
  );
};

