import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";
import { useNotificationStore } from "../lib/notificationStore.js";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [socket, setSocket] = useState(null);
    const increaseNotification = useNotificationStore((state) => state.increase);

    useEffect(() => {
        const newSocket = io("http://localhost:4000");
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            // Emit user ID when the user connects
            user && socket.emit("newUser", user.id);

            // Listen for notifications
            socket.on("notification", (data) => {
                if (data.type === "new_message") {
                    increaseNotification(); // Increment the notification count
                }
            });
        }
    }, [socket, user, increaseNotification]);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
