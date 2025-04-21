
// src/components/LifestyleForm.jsx
import { useForm } from "react-hook-form";
import { ErrorMsg } from "./common/ErrorMsg";
import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";
import { CheckBoxTag } from "./common/CheckBoxTag";

export const LifestyleForm = ({ onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const submitForm = data => onSubmit(data);

  return (

    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title="Lifestyle" />

        <SelectTag
          label="How do you best describe your activity history?"
          register={register}
          registerName={"activity"}
          requiredStatus={true}
          defaultText="Please choose..."
          options={[
            { value: "sedentary", label: "Sedentary: Little or no exercise" },
            { value: "one_to_three", label: "Exercise 1-3 times/week" },
            { value: "four_to_five", label: "Exercise 4-5 times/week" },
            { value: "daily_or_intense", label: "Daily / Intense Exercise 3-4 times/week" },
            { value: "intense", label: "Intense Exercise 6-7 times/week" },
            { value: "very_intense", label: "Very Intense Exercise Daily (Physical Job)" },
          ]}
          error={errors?.activity}
        />

        <SelectTag
          label="Do you prefer to have an afternoon nap immediately after your lunch?"
          register={register}
          registerName={"afternoonNap"}
          requiredStatus={true}
          defaultText="Please choose..."
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "sometimes", label: "Sometimes" },
          ]}
          error={errors?.afternoonNap}
        />

        <SelectTag
          label="Has weight been a problem for you, anytime?"
          register={register}
          registerName={"weightIssues"}
          requiredStatus={true}
          defaultText="Please choose..."
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "sometimes", label: "Sometimes" },
          ]}
          error={errors?.weightIssues}
        />

        <br />

        <label>
          Has weight been a problem for you, anytime?

          <span style={{ fontSize: "0.7rem", color: "gray" }}>(You can select multiple)</span>

          <div style={{ marginLeft: "0.5rem" }}>
            <CheckBoxTag label="Gaining weight" register={register} registerName="weightIssues" value="Gaining weight" />
            <CheckBoxTag label="Losing weight" register={register} registerName="weightIssues" value="Losing weight" />
            <CheckBoxTag label="No issue" register={register} registerName="weightIssues" value="No issue" />
          </div>

        </label>

        <br />

        <label>
          Has weight been a problem for you, anytime?

          <span style={{ fontSize: "0.7rem", color: "gray" }}>(You can select multiple)</span>

          <div style={{ marginLeft: "0.5rem" }}>
            <CheckBoxTag label="Less than 4 hrs" register={register} registerName="weightIssues" value="less_than_four" />
            <CheckBoxTag label="Around 4-6 hrs" register={register} registerName="weightIssues" value="four_to_six" />
            <CheckBoxTag label="More than 6 hrs" register={register} registerName="weightIssues" value="more_than_six" />
          </div>

        </label>

        <br />

        <SelectTag
          label={"How do you best describe your sleep pattern?"}
          register={register}
          registerName={"sleepQuality"}
          requiredStatus={true}
          defaultText="Please choose..."
          options={[
            { value: "good", label: "Good" },
            { value: "disturbed", label: "Disturbed" },
            { value: "inconsistent", label: "Inconsistent" },
            { value: "not_sure", label: "I'm not sure" },
          ]}
          error={errors?.sleepQuality}
        />

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  );
};
