
// export const Confirmation = ({ formData }) => {
//   console.log(formData)
//   return (
//     <div>
//       <h2>🎉 Thank you! Your form has been submitted.</h2>
//       <h3>Here is a summary of your responses:</h3>

//       <ul>
//         {Object?.entries(formData)?.map(([key, value]) => (
//           <li key={key}>
//             <strong style={{ textTransform: "capitalize" }}>{key}:</strong>{" "}
//             {Array?.isArray(value) ? value?.join(", ") : value?.toString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { useEffect, useState } from "react";

export const Confirmation = ({ formData }) => {

  const [pdfURL, setPdfURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const submitFormAndGeneratePDF = async () => {

      try {
        const res = await fetch("http://localhost:5000/api/form/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.ok) {
          setPdfURL(result.pdfURL); // Set Cloundinary PDF Link
        } else {
          setError(result.message || "Something went wrong while generating the PDF.");
        }
      } catch (err) {
        setError("An error occurred while generating the PDF." + err.message);
      } finally {
        setLoading(false);
      }
    };

    submitFormAndGeneratePDF();

  }, [formData]);

  if (loading) return <p>⏳ Generating your report...</p>;
  if (error) return <p style={{ color: "red", }}>❌ {error}</p>

  const downloadPDF = () => {
    window.open("http://localhost:5000/" + pdfURL, "_blank");
  }

  return (
    <div style={{ padding: "2rem" }}>

      <h2>Thank You! Your report has been successfully generated.</h2>
      <p>You can download or share your report using the options below:</p>

      <a
        href={pdfURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.7em",
          marginBottom: "1rem",
        }}
      >
        📄 Download Your PDF
      </a>

      <br />
      <button disabled>📧 Send via Email (Coming Next)</button>
      <br />
      <br />
      <button disabled>💬 Share via WhatsApp (Coming Soon)</button>

    </div>
  );

};
