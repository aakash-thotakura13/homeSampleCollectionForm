
export const Confirmation = ({ formData }) => {
  return (
    <div>
      <h2>🎉 Thank you! Your form has been submitted.</h2>
      <h3>Here is a summary of your responses:</h3>

      <ul>
        {Object?.entries(formData)?.map(([key, value]) => (
          <li key={key}>
            <strong style={{ textTransform: "capitalize" }}>{key}:</strong>{" "}
            {Array?.isArray(value) ? value?.join(", ") : value?.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};
