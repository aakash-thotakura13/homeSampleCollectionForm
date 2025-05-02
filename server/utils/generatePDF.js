const puppeteer = require("puppeteer-core");
const chromium = require("chrome-aws-lambda");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const cloudinary = require("./cloudinary");

const generatePDF = async (formData, fileName) => {
  try {
    // Render EJS template to HTML
    // const html = await ejs.renderFile(path.join(__dirname, "../templates/pdfTemplate.ejs"), { data: formData });
    const html = await ejs.renderFile(
      path.join(__dirname, "../templates/pdfTemplate.ejs"),
      {
        data: formData,
        generatedAt: new Date(), // 🆕 Add this!
      }
    );
    

    // Launch Puppeteer in server-safe mode
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html);

    // Save PDF locally
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    // Upload PDF to Cloudinary
    const uploadResult = await cloudinary.uploader.upload_stream(
      { resource_type: "raw", public_id: `pdfs/${fileName}` },
      (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error);
          throw new Error("Cloudinary Upload Failed");
        }
        console.log("✅ Uploaded PDF to Cloudinary:", result.secure_url);
      }
    );

    // Instead of uploading from a file path, upload from Buffer
    const upload = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "raw", public_id: `pdfs/${fileName}` },
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
