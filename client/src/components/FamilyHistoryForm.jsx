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

        <label>
          Are any of your immediate family affected by the following conditions?

          <span style={{ fontSize: "0.7rem", color: "gray" }}>(You can select multiple)</span>

          <div style={{ marginLeft: "0.5rem" }}>
            {
              [
                "diabetes", "hypertension", "cardiac arrest", "brain stroke", "anxiety", "arthritis", "asthma", "cancers", "stroke under 50yrs",
                "heart attacks under 50yrs", "mental illness", "High BP", "migrane", "obesity", "osteoporosis", "breast cancer", "chest pain",
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