import apiClient from "..";

const twoFactorAuth = async (data: any) => {
    try {
        const response = await apiClient.post(`auth_2fa`, data);
        return response.data;
    } catch (error: any) {
        console.error('Error:', error);
        throw error;
    }
};

export default twoFactorAuth;