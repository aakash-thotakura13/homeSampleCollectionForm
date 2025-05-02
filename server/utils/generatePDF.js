const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const cloudinary = require("./cloudinary");

const generatePDF = async (formData, fileName) => {
  try {
    // Render EJS template to HTML
    const html = await ejs.renderFile(
      path.join(__dirname, "../templates/pdfTemplate.ejs"),
      {
        data: formData,
        generatedAt: new Date(),
      }
    );

    // Launch puppeteer with server-safe flags
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

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
    console.error("Error generating PDF:", error);
    throw new Error("PDF generation failed");
  }
};

module.exports = generatePDF;
