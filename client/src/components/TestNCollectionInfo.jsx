import { useForm } from "react-hook-form";
import { ErrorMsg } from "./common/ErrorMsg";
import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";

export const TestNCollectionInfo = ({ onSubmit }) => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();

  const allergyStatus = watch("hasAllergies");

  const submitForm = (data) => {
    console.log("Food Intake Submitted:", data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title="Test & Collection Information" />

        <SelectTag
          label="Please make sure to have 12 hrs fasting between your last meal and giving the blood sample"
          register={register}
          registerName="fastingConfirmation"
          requiredStatus={true}
          options={[
            { value: "sure", label: "Sure, I will" },
            { value: "not_sure", label: "I might not" },
          ]}
          error={errors?.fastingConfirmation}
          defaultText="Please choose..."
        />

        <SelectTag
          label="Have you experienced fainting during blood collection in the past?"
          register={register}
          registerName="faintingHistory"
          requiredStatus={true}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          error={errors?.faintingHistory}
          defaultText="Please choose..."
        />

        <SelectTag
          label="Are you on blood thinners (e.g., Aspirin, Warfarin)?"
          register={register}
          registerName="bloodThinners"
          requiredStatus={true}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          error={errors?.bloodThinners}
          defaultText="Please choose..."
        />

        <SelectTag
          label="Do you have any allergies?"
          register={register}
          registerName="hasAllergies"
          requiredStatus={true}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
          error={errors?.hasAllergies}
          defaultText="Please choose..."
        />

        {allergyStatus === "yes" && (
          <label>
            If yes, please specify:
            <textarea
              {...register("allergyDetails", { required: "Please specify your allergy" })}
            />
            <ErrorMsg err={errors?.allergyDetails?.message} />
          </label>
        )}

        <label>
          Type of Request:
          <div style={{ marginLeft: "0.5rem" }}>
            <label style={{ padding: "0.1em" }}><span style={{ display: "flex", placeItems: "center" }}><input type="radio" value="doctor" {...register("requestType", { required: "Select a request type" })} />&nbsp;Doctor Prescribed</span></label>
            <label style={{ padding: "0.1em" }}><span style={{ display: "flex", placeItems: "center" }}><input type="radio" value="self" {...register("requestType")} />&nbsp;Self Ordered</span></label>
            <label style={{ padding: "0.1em" }}><span style={{ display: "flex", placeItems: "center" }}><input type="radio" value="corporate" {...register("requestType")} />&nbsp;Corporate Requirement</span></label>
            <label style={{ padding: "0.1em" }}><span style={{ display: "flex", placeItems: "center" }}><input type="radio" value="insurance" {...register("requestType")} />&nbsp;Insurance Requirement</span></label>
          </div>
          {errors?.requestType && <ErrorMsg err={errors?.requestType?.message} />}
        </label>

        <br />

        <label>
          When was your last annual health check-up done?
          <input
            type="date"
            {...register("lastHealthCheckup")}
          />
        </label>

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  )
}