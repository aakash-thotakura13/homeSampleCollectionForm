const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
const ejs = require("ejs");
const path = require("path");
const cloudinary = require("./cloudinary");

const generatePDF = async (formData, fileName) => {
  try {
    // Render EJS template
    const html = await ejs.renderFile(
      path.join(__dirname, "../templates/pdfTemplate.ejs"),
      {
        data: formData,
        generatedAt: new Date(),
      }
    );

    const executablePath = await chromium.executablePath;

    if (!executablePath) {
      throw new Error("❌ Puppeteer failed: executablePath is undefined (likely unsupported env)");
    }

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      defaultViewport: chromium.defaultViewport,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    // Upload to Cloudinary using buffer
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
