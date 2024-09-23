const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: {
          type: Date, // It's better to store this as a Date
          default: Date.now, // Automatically assign the current date/time
        },
 },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
