const FormSubmission = require("../models/FormSubmission");
const generatePDF = require("../utils/generatePDF");

const sendEmail = require("../utils/sendEmail");

const submitForm = async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();

    const fileName = `submission_${newSubmission._id}.pdf`;
    const pdfURL = await generatePDF(req.body, fileName);

    newSubmission.pdfUrl = pdfURL;
    await newSubmission.save();

    res
      .status(201)
      .json({ message: "Saved Form and uploaded to Cloudinary", pdfURL });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ message: "Failed to submit form", error });
  }
};

const sendEmailToUser = async (req, res) => {
  try {
    const { email, pdfURL } = req.body;

    if (!email || !pdfURL) {
      return res
        .status(400)
        .json({ message: "Email and PDF URL are required" });
    }

    const subject = "Your Home Sample Collection Report";
    const html = `
  <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
    <div style="text-align: center;">
      <img src="https://www.tricorderdiagnostics.com/siteimages/logo/tricorder_logo.svg" alt="Tricorder_logo" style="width: 150px; margin-bottom: 20px;" />
    </div>

    <h2 style="color: #333;">Hello,</h2>

    <p>Thank you for filling out the Tricorder Home Sample Collection Form.</p>

    <p>Your report is ready! You can download it by clicking the button below:</p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${pdfURL}" target="_blank" 
         style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; font-size: 16px; border-radius: 5px;">
        📄 Download Your Report
      </a>
    </div>

    <p style="color: #555;">Stay Healthy, Stay Happy!</p>
    <p style="color: #555;">- Tricorder Team</p>
  </div>
`;

    const emailSent = await sendEmail(email, subject, html);

    if (emailSent) {
      res.json({ message: "Email sent successfully" });
    } else {
      res.status(500).json({ message: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "Server error while sending email.", error });
  }
};

module.exports = { submitForm, sendEmailToUser };
