import { useEffect, useState } from "react";

export const Confirmation = ({ formData }) => {
  const [pdfURL, setPdfURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const BASE_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://homesamplecollectionform.onrender.com";

  useEffect(() => {
    const submitFormAndGeneratePDF = async () => {
      setLoading(true);
      setError("");
      setMessage("");

      try {
        const res = await fetch(`${BASE_URL}/api/form/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.ok) {
          setPdfURL(result.pdfURL); // ✅ Set Cloudinary URL
          setMessage({ type: "success", text: "🎉 Report generated successfully!" });
        } else {
          setError(result.message || "❌ Something went wrong while generating the PDF.");
        }
      } catch (err) {
        setError("❌ Network error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    submitFormAndGeneratePDF();
  }, [formData]);

  if (loading) return <p style={{ textAlign: "center" }}>⏳ Generating your report... Please wait.</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {message && (
        <p style={{
          color: message.type === "success" ? "green" : "red",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}>
          {message.text}
        </p>
      )}

      {
        message?.type === "success" && <>
          <h2>🎉 Thank You! Your report has been successfully generated.</h2>
          <p>You can download or share your report using the options below:</p>
        </>
      }

      {pdfURL && (
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
            margin: "1rem 0",
          }}
        >
          📄 Download Your PDF
        </a>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        <button disabled style={{ padding: "10px 20px", margin: "0.5rem", cursor: "not-allowed" }}>
          📧 Send via Email (Coming Next)
        </button>
        <button disabled style={{ padding: "10px 20px", margin: "0.5rem", cursor: "not-allowed" }}>
          💬 Share via WhatsApp (Coming Soon)
        </button>
      </div>

    </div>
  );
};
