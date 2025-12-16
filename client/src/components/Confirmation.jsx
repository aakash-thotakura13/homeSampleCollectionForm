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
        setError("❌ Network Error: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    submitFormAndGeneratePDF();
  }, [formData]);


  const handleSendEmail = async () => {

    if (!formData.generalInfo.email || !pdfURL) {
      alert("User email or PDF URL is missing.");
      return;
    }

    try {

      const res = await fetch(`${BASE_URL}/api/form/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.generalInfo.email,
          pdfURL: pdfURL,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email: " + result.message);
      }

    } catch (error) {
      console.error("Error sending email:", error);
      alert("❌ Network error while sending email.");
    }

  };

  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfURL);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "Tricorder_Report.pdf"; // name the file as needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("❌ Failed to download PDF:", err);
    }
  };

  if (loading) return <p style={{ textAlign: "center", }}><span className="icon-spinner">⏳</span> Generating your report... Please wait. <br />Do not close this page.</p>;
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
        // <a
        //   href={pdfURL}
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   style={{
        //     display: "inline-block",
        //     padding: "10px 20px",
        //     backgroundColor: "#4CAF50",
        //     color: "white",
        //     textDecoration: "none",
        //     borderRadius: "0.7em",
        //     margin: "1rem 0",
        //   }}
        // >
        //   📄 Download Your PDF
        // </a>
        <button onClick={downloadPDF}>
          📄 Download Your PDF
        </button>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleSendEmail} style={{ padding: "10px 20px", margin: "0.5rem", cursor: "pointer" }}>
          📧 Send via Email
        </button>
        <button disabled style={{ padding: "10px 20px", margin: "0.5rem", cursor: "not-allowed" }}>
          💬 Share via WhatsApp (Coming Soon)
        </button>
      </div>

    </div>
  );
};
