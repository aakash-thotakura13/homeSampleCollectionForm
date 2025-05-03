import { ErrorMsg } from "./ErrorMsg";

export const InputTag = ({
  label,
  type,
  placeholder,
  register,
  registerName,
  requiredStatus,
  patternValue,
  patternMessage,
  error,
}) => {

  return (
    <label>
      {label || ""}
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerName, {
          required: requiredStatus
            ? "This field is required"
            : false,
          pattern: {
            value: patternValue,
            message: patternMessage,
          },
        })}
      />
      {error && <ErrorMsg err={error?.message} />}
    </label>
  )
};