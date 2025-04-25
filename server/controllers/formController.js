const FormSubmission = require("../models/FormSubmission");
const generatePDF = require("../utils/generatePDF");

const submitForm = async (req, res) => {

  try {
    
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();

    const fileName = `submission_${newSubmission._id}`;
    const pdfURL = await generatePDF(req.body, fileName);

    newSubmission.pdfUrl = pdfURL;
    await newSubmission.save();

    res.status(201).json({ message: "Saved Form and uploaded to Cloudinary", pdfURL });

  } catch (error) {

    console.error("Error saving form:", error);
    res.status(500).json({ message: "Failed to submit form", error });
  }
};

module.exports = { submitForm };
