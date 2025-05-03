const pdf = require("html-pdf-node");
const ejs = require("ejs");
const path = require("path");
const cloudinary = require("./cloudinary");

const generatePDF = async (formData, fileName) => {
  try {
    const html = await ejs.renderFile(
      path.join(__dirname, "../templates/pdfTemplate.ejs"),
      {
        data: formData,
        generatedAt: new Date(),
      }
    );

    const options = { format: "A4" };
    const file = { content: html };

    const pdfBuffer = await pdf.generatePdf(file, options);

    // Upload to Cloudinary
    const upload = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw",
          public_id: `pdfs/${fileName}`,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(pdfBuffer);
    });

    return upload.secure_url;
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
    throw new Error("PDF generation failed");
  }
};

module.exports = generatePDF;
