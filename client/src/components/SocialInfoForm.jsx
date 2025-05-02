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

        <SelectTag
          label={"Do you smoke?"}
          register={register}
          registerName="smoke"
          requiredStatus={false}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "occasional", label: "Occasional" },
            { value: "stopped", label: "Stopped" },
          ]}
          error={errors?.smoke}
          defaultText="Please choose..."
        />

        <SelectTag
          label="Do you accompany a smoker?"
          register={register}
          registerName="accompanySmoker"
          requiredStatus={false}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "occasional", label: "Occasional" },
            { value: "stopped", label: "Stopped" },
          ]}
          error={errors?.accompanySmoker}
          defaultText="Please choose..."
        />

        <SelectTag
          label="Do you consume alcohol?"
          register={register}
          registerName="drink"
          requiredStatus={false}
          options={[
            { value: "yes_daily", label: "Yes, Daily" },
            { value: "occasional", label: "Occasional" },
            { value: "never", label: "Never" },
          ]}
          error={errors?.drink}
          defaultText="Please choose..."
        />

        <SelectTag
          label="Do you chew tobacco?"
          register={register}
          registerName="tobacco"
          requiredStatus={false}
          options={[
            { value: "yes_daily", label: "Yes, Daily" },
            { value: "occasional", label: "Occasional" },
            { value: "never", label: "Never" },
          ]}
          error={errors?.tobacco}
          defaultText="Please choose..."
        />

        <SelectTag
          label="How do you classify your lifestyle?"
          register={register}
          registerName="classified"
          requiredStatus={false}
          options={[
            { value: "nocturnal", label: "Nocturnal (Active during Night)" },
            { value: "diurnal", label: "Diurnal (Active during Day)" },
          ]}
          error={errors?.classified}
          defaultText="Please choose..."
        />

        {
          gender === "female" &&
          <SelectTag
            label="Are you pregnant or breastfeeding?"
            register={register}
            registerName="pregnantOrBreastfeeding"
            requiredStatus={false}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" }]
            }
            error={errors?.pregnantOrBreastfeeding}
            defaultText="Please choose..."
          />
        }

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  )
}