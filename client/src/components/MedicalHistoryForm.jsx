// src/components/MedicalHistoryForm.jsx
import { useForm } from "react-hook-form";

import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";
import { TextAreaTag } from "./common/TextareaTag";
import { InputTag } from "./common/InputTag";
import { CirlceComponent } from "./common/CircleComponent";

export const MedicalHistoryForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const surgeryHistory = watch("surgeryHistory");

  const weight = parseFloat(watch("weight"));
  const height = parseFloat(watch("height"));

  const waist = parseFloat(watch("waist"));
  const hip = parseFloat(watch("hip"));

  // BMI = weight (kg) / (height in meters)^2 * 10000
  const bmi =
    weight > 0 && height > 0
      ? (weight / Math.pow(height / 100, 2)).toFixed(2)
      : "";

  // WHR = waist / hip
  const whr =
    waist > 0 && hip > 0
      ? (waist / hip).toFixed(2)
      : "";

  const submitForm = data => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title={"Medical History"} />

        <SelectTag
          label="Any history of surgeries in the past?"
          register={register}
          registerName="surgeryHistory"
          requiredStatus={true}
          options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
          error={errors?.surgeryHistory}
          defaultText="Please choose..."
        />

        {
          surgeryHistory === "yes" && (
            <TextAreaTag
              placeholder="If Yes, please elaborate:"
              register={register}
              registerName="surgeryDetails"
              requiredStatus={false}
              error={errors?.surgeryDetails}
            />
          )
        }

        <InputTag type={"text"} label="Blood Pressure" placeholder="Blood Pressure (Please mention the last known reading)" register={register} registerName="glucoseReadings" requiredStatus={true} error={errors?.glucoseReadings} />

        <div style={{ display: "flex", justifyContent: "space-around", placeItems: "center", gap: "1em", }}>

          <InputTag type="number" placeholder="Pulse:" register={register} registerName="pulse" requiredStatus={false} error={errors?.pulse} />

          <InputTag type="number" placeholder="SPO2:" register={register} registerName="spo2" requiredStatus={false} error={errors?.spo2} />

        </div>

        <div style={{ display: "flex", justifyContent: "space-between", placeItems: "center", gap: "1rem", }}>

          <span>

            <InputTag type="number" step="any" placeholder="Height (cm):" register={register} registerName="height" requiredStatus={false} error={errors?.height} />

            <InputTag type="number" step="any" placeholder="Weight (kg):" register={register} registerName="weight" requiredStatus={false} error={errors?.weight} />

          </span>

          <span style={{ width: "50%", display: "grid", placeItems: "center", }}>

            <CirlceComponent lable="BMI" value={bmi} />

          </span>

        </div>

        <div style={{ display: "flex", justifyContent: "space-around", placeItems: "center", gap: "1rem", }}>

          <span style={{ width: "50%", display: "grid", placeItems: "center", }}>

            <CirlceComponent lable="WHR" value={whr} />

          </span>

          <span>

            <InputTag type="number" step="any" placeholder="Hip Measurement (inch):" register={register} registerName="hip" requiredStatus={false} error={errors?.hip} />

            <InputTag type="number" step="any" placeholder="Waist Measurement (inch):" register={register} registerName="waist" requiredStatus={false} error={errors?.waist} />

          </span>

        </div>

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  );
};

