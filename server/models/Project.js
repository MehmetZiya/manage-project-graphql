const mongoose = require('mongoose')

const ProjectScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In progress', 'Completed'],
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
})

module.exports = mongoose.model('Project', ProjectScheme)
