const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody; // Replace the request body with the parsed data
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        const status = 422; // Unprocessable Entity
        const message = "Fill the input properly";

        // Check if the error is a Zod validation error
        const extraDetails = err.errors ? err.errors[0]?.message : "Unknown error";

        // Log the error
        console.error("Validation Error:", err);

        // Send the error response
        res.status(400).json({ msg: message, extraDetails });

        // Create a detailed error object for logging/debugging purposes
        const error = {
            status,
            message,
            extraDetails,
        };

        console.log("Error Details:", error);
        next(error); // Pass the error to the next middleware, if needed
    }
};

module.exports = validate;
