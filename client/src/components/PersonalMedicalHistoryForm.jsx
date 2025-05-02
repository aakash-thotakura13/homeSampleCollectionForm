import { useForm } from "react-hook-form";

import { Heading } from "./common/Heading";
import { CheckBoxTag } from "./common/CheckBoxTag";
import { SelectTag } from "./common/SelectTag";
import { TextAreaTag } from "./common/TextareaTag";

export const PersonalMedicalHistory = ({ onSubmit }) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();

  const selectedConditions = watch("conditions") || [];
  const diabetesType = watch("diabetesType");
  const thyroidType = watch("thyroidType");

  const show = name => selectedConditions.includes(name);

  const submitForm = data => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title="Personal Medical History" />

        <label htmlFor="">
          Do you have any known medical condition?

          <div style={{ marginLeft: "0.5rem" }}>

            <CheckBoxTag label="diabetes" register={register} registerName="conditions" value="diabetes" />

            {/* Diabetes Branch */}
            {show("diabetes") && (
              <div style={{ margin: "0em 1em" }}>

                <SelectTag
                  register={register}
                  registerName="diabetesType"
                  requiredStatus={false}
                  defaultText={"Please select Type 1 or Type 2?"}
                  options={[
                    { value: "type1", label: "Type 1" },
                    { value: "type2", label: "Type 2" }
                  ]}
                  error={errors?.diabetesType}
                />

                {diabetesType === "type1" && (
                  <SelectTag
                    register={register}
                    registerName="type1Meds"
                    requiredStatus={false}
                    defaultText={"Are you on medications?"}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                    error={errors?.type1Meds}
                  />
                )}

                {diabetesType === "type2" && (
                  <SelectTag
                    register={register}
                    registerName="type2Insulin"
                    requiredStatus={false}
                    defaultText={"Are you currently on insulin?"}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                    error={errors?.type2Insulin}
                  />
                )}
              </div>
            )}

            <CheckBoxTag label="hypertension" register={register} registerName="conditions" value="hypertension" />

            {/* Hypertension */}
            {show("hypertension") && (
              <SelectTag
                register={register}
                registerName={"hypertensionMeds"}
                requiredStatus={false}
                defaultText={"Are you on medication for Hypertension?"}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" }
                ]}
                error={errors?.hypertensionMeds}
              />
            )}

            <CheckBoxTag label="thyroid issue" register={register} registerName="conditions" value="thyroid" />

            {/* Thyroid */}
            {show("thyroid") && (

              <div style={{ marginLeft: "0.5rem" }}>

                <SelectTag
                  register={register}
                  registerName={"thyroidType"}
                  requiredStatus={false}
                  defaultText={"Type of Thyroid Disorder"}
                  options={[
                    { value: "hypo", label: "Hypothyroidism" },
                    { value: "hyper", label: "Hyperthyroidism" }
                  ]}
                  error={errors?.thyroidType}
                />

                {thyroidType && (
                  <SelectTag
                    register={register}
                    registerName={"thyroidMeds"}
                    requiredStatus={false}
                    defaultText={"Are you on medication?"}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" }
                    ]}
                    error={errors?.thyroidMeds}
                  />
                )}
              </div>
            )}

            <CheckBoxTag label="kidney issue" register={register} registerName="conditions" value="kidney" />

            {/* Kidney */}
            {show("kidney") && (
              <TextAreaTag
                placeholder={"Please elaborate:"}
                register={register}
                registerName={"kidneyDetails"}
                requiredStatus={false}
                error={errors?.kidneyDetails}
              />
            )}

            <CheckBoxTag label="heart issue" register={register} registerName="conditions" value="heart" />

            {/* Heart */}
            {show("heart") && (
              <TextAreaTag
                placeholder={"Please elaborate:"}
                register={register}
                registerName={"heartDetails"}
                requiredStatus={false}
                error={errors?.heartDetails}
              />

            )}

            <CheckBoxTag label="others" register={register} registerName="conditions" value="others" />

            {/* Others */}
            {show("others") && (
              <TextAreaTag
                placeholder={"Please specify:"}
                register={register}
                registerName={"otherConditions"}
                requiredStatus={false}
                error={errors?.otherConditions}
              />
            )}

          </div>

        </label>

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  )
}