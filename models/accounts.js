const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
username: testUser {
     type: String,
    required: true
 },
snippet: {
    type: String,
    required: true
 },
body: {
    type: String,
    required: true
 }

}, { timestamps: true });