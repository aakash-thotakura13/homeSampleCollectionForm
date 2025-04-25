const FormSubmission = require("../models/FormSubmission");
const generatePDF = require("../utils/generatePDF");

const submitForm = async (req, res) => {

  try {
    
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();

    const filenName = `submission_${newSubmission._id}`;
    const pdfPath = await generatePDF(req.body, filenName);

    res.status(201).json({ message: "Form saved and pdf generated", pdfPath });

  } catch (error) {

    console.error("Error saving form:", error);
    res.status(500).json({ message: "Failed to submit form", error });
  }
};

module.exports = { submitForm };
