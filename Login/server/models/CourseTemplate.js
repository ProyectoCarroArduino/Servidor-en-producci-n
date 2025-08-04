import mongoose from 'mongoose';
import { ModuleSchema } from './Module.js';

const CourseTemplateSchema = new mongoose.Schema({
  nombre: String,
  modulos: [ModuleSchema]
});

export const CourseTemplate = mongoose.model("CourseTemplate", CourseTemplateSchema);
