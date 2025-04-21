
export const CheckBoxTag = ({
  label,
  register,
  registerName,
  value
}) => {
  return (
    <label htmlFor="" style={{ padding: "0.1em" }}>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "0.5em",
          textTransform: "capitalize",
        }}>
        <input
          type="checkbox"
          value={value}
          {...register(registerName)}
        />
        &nbsp;{label}
      </span>
    </label>
  )
}