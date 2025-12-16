import { ErrorMsg } from "./ErrorMsg";

export const SelectTag = ({
  label,
  register,
  registerName,
  requiredStatus,
  defaultText,
  options = [],
  error,
}) => {
  return (
    <label>
      {label || ""}
      <select
        {...register(registerName, {
          required: requiredStatus ? "This field is required" : false,
        })}>

        <option value="" disabled selected hidden>{defaultText}</option>

        {options.map((option, id) => (
          <option key={id} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
      {error && <ErrorMsg err={error?.message} />}
    </label>
  )
};