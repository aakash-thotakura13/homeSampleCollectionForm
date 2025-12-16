
export const CirlceComponent = ({
  lable,
  value,
}) => {
  return (
    <p style={{
      width: "80px",
      aspectRatio: "1/1",
      borderRadius: "50%",
      backgroundColor: "#76AF44",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.15)",
      placeContent: "center",
      textAlign: "center",
    }}>
      <span>{lable}: {value}</span>
    </p>
  )
}