const puppeteer = require("puppeteer");
const ejs = require("ejs");
const os = require("os");
const fs = require("fs");
const cloudinary = require("./cloudinary");

const path = require("path");


const generatePDF = async (data, fileName) => {
  try {
    // Render the EJS HTML
    const templatePath = path.join(__dirname, "../templates/pdfTemplate.ejs");
    const html = await ejs.renderFile(templatePath, { data, generatedAt: new Date() });

    // Setup temp Folder Path
    const tmpDir = os.tmpdir();
    const pdfPath = path.join(tmpDir, `${fileName}.pdf`);

    // Generate PDF using Puppeteer
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "domcontentloaded" });

    await page.pdf({ path: pdfPath, format: "A4" });
    await browser.close();

    const result = await cloudinary.uploader.upload(pdfPath, {
      resource_type: "raw",
      folder: "hsc_pdfs",
      public_id: fileName,
    });

    // ✅ Delete the local file after uploading
    fs.unlinkSync(pdfPath);

    // Return Cloudinary Public URL
    return result.secure_url;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("PDF generation failed");
  }
};

module.exports = generatePDF;
