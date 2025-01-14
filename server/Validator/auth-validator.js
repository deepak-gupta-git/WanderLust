const { z } = require("zod");

// Signup Schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must not be more than 50 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid Email or Password"})
    .min(5, { message: "Email must be at least 5 characters" })
    .max(50, { message: "Email must not be more than 50 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password must not be more than 50 characters" }),
});

// Email Schema
const emailSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message:"Invalid Email or Password"})
    .min(5, { message: "Email must be at least 5 characters" })
    .max(50, { message: "Email must not be more than 50 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50, { message: "Password must not be more than 50 characters" }),
});

// Correct Export
module.exports = { signupSchema, emailSchema };
