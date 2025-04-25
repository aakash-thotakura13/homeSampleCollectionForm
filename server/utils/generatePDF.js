const puppeteer = require("puppeteer");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

const generatePDF = async (data, filenName) => {
  
  const templatePath = path.join(__dirname, "../templates/formTemplate.ejs");
  const html = await ejs.renderFile(templatePath, { data });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "domcontentloaded" });

  const pdfPath = path.join(__dirname, `../pdfs/${filenName}.pdf`);
  await page.pdf({ path: pdfPath, format: "A4" });

  await browser.close();

  return pdfPath;
};

module.exports = generatePDF;
