import { getClient } from ".";

const deleteApiKey = async (data: any) => {
    try {
        const response = await (await getClient()).post('delete_api_key', data);
        return response.data;
    } catch (error: any) {
        console.error('Error:', error);
        throw error;
    }
};

export default deleteApiKey;