import { useForm } from "react-hook-form"

import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";

export const SocialInfoForm = ({ onSubmit, gender }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = data => onSubmit(data);

  return (

    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title="Social Information" />

        <SelectTag register={register} registerName="smoke" requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "occasional", label: "Occasional" }, { value: "stopped", label: "Stopped" }]} error={errors?.smoke} defaultText="Do you smoke?" />

        <SelectTag register={register} registerName="accompanySmoker" requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "occasional", label: "Occasional" }, { value: "stopped", label: "Stopped" }]} error={errors?.accompanySmoker} defaultText="Do you accompany a smoker?" />

        <SelectTag register={register} registerName="drink" requiredStatus={true} options={[{ value: "yes_daily", label: "Yes, Daily" }, { value: "occasional", label: "Occasional" }, { value: "never", label: "Never" }]} error={errors?.drink} defaultText="Do you accompany a smoker?" />

        <SelectTag register={register} registerName="tobacco" requiredStatus={true} options={[{ value: "yes_daily", label: "Yes, Daily" }, { value: "occasional", label: "Occasional" }, { value: "never", label: "Never" }]} error={errors?.tobacco} defaultText="Do you chew tobacco?" />

        <SelectTag register={register} registerName="classified" requiredStatus={true} options={[{ value: "nocturnal", label: "Nocturnal (Active during Night)" }, { value: "diurnal", label: "Diurnal (Active during Day)" },]} error={errors?.classified} defaultText="How are you classified by lifestyle?" />

        {
          gender === "female" &&
          <SelectTag register={register} registerName={registerName} requiredStatus={true} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} error={errors?.pregnantOrBreastfeeding} defaultText="Are you pregnant or breastfeeding?" />
        }

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  )
}