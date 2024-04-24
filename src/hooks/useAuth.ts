import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string
            };
        };
    }
}

export const useAuth = () => {
    const [finishedAuth, setFinishedAuth] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()


    const userId = () => {
        // Split the string into key-value pairs
        const keyValuePairs = window.Telegram.WebApp.initData.split('&');

        // Initialize an empty object to store parsed data
        const parsedData = {} as any;

        // Iterate over each key-value pair and parse it
        keyValuePairs.forEach(pair => {
            const [key, value] = pair.split('=');
            // Decode URL component to get the actual value
            parsedData[key] = decodeURIComponent(value);
        });

        // Extract the user data, which is JSON encoded
        const userDataString = parsedData['user'];

        if (!parsedData['user'])
            return null

        const data = JSON.parse(decodeURIComponent(userDataString))

        return data.id;
    }

    const getAuth = async () => {
        try {
            if (!window.Telegram || !userId()) {
                setFinishedAuth(true)
                return
            }

            const response = await axios.post('https://yandex-eda-meat-backend.pav.studio/api/check-subscription', {
                "chat_id": "-1001888624268",
                "user_id": userId().toString()
            })

            if (response.data.ok !== undefined) {
                if (response.data.ok && response.data.result.status === "member") {
                    setLoggedIn(true)
                    navigate('/on-boarding');
                    return
                }
            }

            setFinishedAuth(true)
        }

        catch {
            setFinishedAuth(true)
        }
    }

    useEffect(() => {
        getAuth()
    }, [getAuth])

    return {finishedAuth, loggedIn, getAuth}
}
