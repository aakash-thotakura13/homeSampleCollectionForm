
import { useForm } from "react-hook-form";

import { Heading } from "./common/Heading";
import { InputTag } from "./common/InputTag";
import { SelectTag } from "./common/SelectTag";
import { TextAreaTag } from "./common/TextareaTag";


export const GeneralInfoForm = ({ onSubmit }) => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const submitForm = data => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title="Personal Information" />

        <InputTag type={"text"} placeholder="Full Name" register={register} registerName="fullName" requiredStatus={true} error={errors?.fullName} />

        <InputTag type={"number"} placeholder="Age" register={register} registerName="age" requiredStatus={true} error={errors?.age} />

        <SelectTag label={""} register={register} registerName="gender" requiredStatus={true} options={[{ value: "female", label: "Female" }, { value: "male", label: "Male" }, { value: "other", label: "Other" }]} error={errors?.gender} defaultText={"Select Gender"} />

      </fieldset>

      <fieldset>

        <Heading title="Contact Information" />

        <InputTag type={"tel"} placeholder="Mobile Number" register={register} registerName="mobile" requiredStatus={true} patternValue={/^[6-9]\d{9}$/} patternMessage={"Mobile number must be 10 digits starting with 6-9"} error={errors?.mobile} />

        <InputTag type={"email"} placeholder="Email ID" register={register} registerName="email" requiredStatus={true} patternValue={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/} patternMessage={"Enter a valid email address"} error={errors?.email} />


        <TextAreaTag placeholder="Address" register={register} registerName="address" requiredStatus={true} error={errors?.address} />

        <InputTag type={"number"} placeholder="Pincode" register={register} registerName="pincode" requiredStatus={true} patternValue={/^[0-9]{6}$/} patternMessage={"Pincode must be 6 digists"} error={errors?.pincode} />

        <InputTag type={"text"} placeholder="Google Location Link" register={register} registerName="googleLocationPin" requiredStatus={true} patternValue="" patternMessage={"This field is required"} error={errors?.googleLocationPin} />

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  )
}