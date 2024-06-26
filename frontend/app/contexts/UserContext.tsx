import { createContext, useState, useEffect, useMemo } from "react";
import apiClient from "~/services/api";
import getUserData from "~/services/api/me";
import { User, UserContextType } from "~/types/user";

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { },
    temp2faUserId: null,
    setTemp2faUserId: () => { }
});

export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [temp2faUserId, setTemp2faUserId] = useState<string | null>(null)

    // Initialize user state from localStorage to handle refreshes more consistently
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            const userFromLocalStorage = localStorage.getItem('user');
            return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
        }
        return null;
    });

    // Effect to update localStorage when the user state changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.jwt}`;
            } else {
                localStorage.removeItem('user');
                delete apiClient.defaults.headers.common['Authorization'];
            }
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            // Fetch the latest user data if a user is logged in
            const fetchUserData = async () => {
                const latestUserData = await getUserData();
                setUser((prevUser: User | null) => { return { ...latestUserData, jwt: prevUser?.jwt } })
            };

            fetchUserData();
        }
    }, []); // Empty dependency array means this effect runs once after the initial 

    // Memorize the context value to prevent unnecessary re-renders
    const value = useMemo(() => ({ user, setUser, temp2faUserId, setTemp2faUserId }), [user, temp2faUserId]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
