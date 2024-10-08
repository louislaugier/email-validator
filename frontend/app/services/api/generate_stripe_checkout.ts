import { getClient } from ".";

const generateStripeCheckout = async (data: any) => {
    try {
        const response = await (await getClient()).post('generate_stripe_checkout', data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default generateStripeCheckout;
