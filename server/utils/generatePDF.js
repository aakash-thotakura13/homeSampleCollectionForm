const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const ejs = require("ejs");

const cloudinary = require("./cloudinary");

const generatePDF = async (data, fileName) => {
  const templatePath = path.join(__dirname, "../templates/pdfTemplate.ejs");
  const html = await ejs.renderFile(templatePath, { data });

  const pdfsDir = path.join(__dirname, "../pdfs");

  if (!fs.existsSync(pdfsDir)) {
    fs.mkdirSync(pdfsDir);
  }

  const pdfPath = path.join(pdfsDir, `${fileName}.pdf`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "domcontentloaded" });

  await page.pdf({ path: pdfPath, format: "A4" });
  await browser.close();

  const result = await cloudinary.uploader.upload(pdfPath, {
    resource_type: "raw",
    folder: "hsc_pdfs",
    public_id: fileName,
    overwrite: true,
  });

  return result.secure_url;
};

module.exports = generatePDF;
