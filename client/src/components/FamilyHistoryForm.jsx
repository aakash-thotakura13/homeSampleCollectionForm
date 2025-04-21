import { useForm } from "react-hook-form";

import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";
import { CheckBoxTag } from "./common/CheckBoxTag";

export const FamilyHistoryForm = ({ onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const submitForm = data => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title="Family History" />

        <SelectTag label="Is Diabetes running in your immediate family?" register={register} registerName="familyDiabetes" requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "maybe", label: "Maybe" }]} error={errors?.familyDiabetes} defaultText="Please choose..." />

        <SelectTag label="Is Hypertension running in your immediate family?" register={register} registerName={"familyHypertension"} requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "maybe", label: "Maybe" }]} error={errors?.registerName} defaultText="Please choose..." />

        <SelectTag label="Any history of Cardiac Arrests / Heart Attacks in your immediate family?" register={register} registerName={"familyCardiac"} requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "maybe", label: "Maybe" }]} error={errors?.familyCardiac} defaultText="Please choose..." />

        <SelectTag label="Any history of brain stroke (Paralysis / Paresis) in your immediate family?" register={register} registerName={"familyStroke"} requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "maybe", label: "Maybe" }]} error={errors?.familyStroke} defaultText="Please choose..." />

        <label>
          Does any of your immediate family have any of these below problems?

          <span style={{ fontSize: "0.7rem", color: "gray" }}>(You can select multiple)</span>

          <div style={{ marginLeft: "0.5rem" }}>
            {
              [
                "anxiety", "arthritis", "asthma", "cancers", "stroke under 50yrs", "heart attacks under 50yrs",
                "mental illness", "High BP", "migrane", "obesity", "osteoporosis", "breast cancer", "chest pain",
              ]
                .map((item, id) => <CheckBoxTag key={id} label={item} register={register} registerName="familyProblems" value={item} />)
            }
          </div>

        </label>

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  )
};