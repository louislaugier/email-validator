import apiClientInstance from "..";

const googleAuth = async (data: any) => {
    try {
        const response = await apiClientInstance.post('auth/google', data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default googleAuth;