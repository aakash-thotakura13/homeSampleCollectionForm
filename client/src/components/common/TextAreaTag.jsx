
export const TextAreaTag = ({
  label,
  placeholder,
  register,
  registerName,
  requiredStatus,
  error
}) => {
  return (
    <label>
      <textarea
        placeholder={placeholder}
        {...register(registerName, {
          requiredStatus: requiredStatus
            ? "This field is required"
            : false,
        })}
      >
      </textarea>
      {error && <ErrorMsg err={error?.message} />}
    </label>
  )
}