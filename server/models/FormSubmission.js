const mongoose = require("mongoose");

const FormSubmissionSchema = new mongoose.Schema(
  {
    generalInfo: {
      fullName: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, required: true },
      mobile: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      pincode: { type: String, required: true },
      googleLocationPin: { type: String, required: true },
    },
    socialInfo: {
      smoke: String,
      accompanySmoker: String,
      drink: String,
      tobacco: String,
      classified: String,
      pregnantOrBreastfeeding: String,
    },
    personalMedical: {
      conditions: [String],
      diabetiesType: String,
      type1Meds: Boolean,
      type2Meds: Boolean,
      hypertension: Boolean,
      hypertensionMeds: Boolean,
      thyroidType: String,
      thyroidMeds: Boolean,
      kidneyDetails: String,
      heartDetails: String,
      otherConditions: String,
    },
    familyHistory: {
      familyConditions: [String],
    },
    lifeStyle: {
      activity: String,
      afternoonNap: String,
      weightIssues: String,
      sleepPattern: String,
      sleepQuality: String,
    },
    medicalHistory: {
      surgeryHistory: String,
      surgeryDetails: String,
      glucoseReadings: String,
      pulse: String,
      spo2: String,
      height: String,
      weight: String,
      hip: String,
      waist: String,
    },
    dietaryPreference: {
      dietType: String,
      mealsSkipped: String,
      compensatoryEater: String,
      tvEater: String,
      dinnerSleepGap: String,
      fruitFrequency: String,
      greensFrequency: String,
      milkFrequency: String,
      carbonated: String,
      snackHabit: String,
      waterIntake: String,
    },
    testNCollection: {
      fastingConfirmation: String,
      faintingHistory: String,
      bloodThinners: String,
      hasAllergies: String,
      allergyDetails: String,
      requestType: String,
      lastHealthCheckup: Date,
    },
    pdfUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormSubmission", FormSubmissionSchema);
