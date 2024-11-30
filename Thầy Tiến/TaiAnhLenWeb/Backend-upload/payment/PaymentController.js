import Payment from "./Payment.js";

export const PaymentHandle = async (req, res) => {
    const { id, amount, currency } = req.body;

    // Check if all necessary fields are present
    if (!id || !amount || !currency) {
        return res.status(400).json({ message: 'Incomplete payment details' });
    }

    try {
        // Create a new payment object
        const newPayment = new Payment({
            orderId: id,
            amount: amount,
            currency: currency,
            status: 'complete'
        });

        // Save the new payment to the database
        await newPayment.save();

        // Respond with a success message
        return res.status(200).json({ message: 'Payment details received and saved successfully' });
    } catch (error) {
        console.error("Error saving payment details:", error); // Log the actual error for debugging
        return res.status(500).json({ message: 'Error saving payment details', error: error.message });
    }
};
