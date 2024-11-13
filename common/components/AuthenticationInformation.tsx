import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";

type AuthenticateUser = {
    username: string;
}

type AuthenticateInformationDto = {
    isAuthenticated: boolean;
    user: AuthenticateUser;
}

const AuthenticationInformation = () => {
    const [authenticateDto, setAuthenticateDto] = useState<AuthenticateInformationDto>({
        isAuthenticated: false,
        user: { username: '' }
    })

    async function getAuthenticationInformationFromApi(userInfo: AuthenticateUser): Promise<AuthenticateInformationDto> {
        const response = await fetch("/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });
        return await response.json();
    }

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        console.log("Store user: ", storedUser);
        
        if (storedUser) {
            const user = JSON.parse(storedUser);
            getAuthenticationInformationFromApi(user).then((data) => {
                console.log("Authentication data:", data);
                setAuthenticateDto(data);
            });
        }
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
            });
            if (response.status === 200) {
                setAuthenticateDto({ isAuthenticated: false, user: { username: "" } });
                sessionStorage.removeItem("user")
                router.push("/");
            } else {
                console.error("Error logging out");
            }
        } catch (error) {
            console.error("Logout request failed:", error);
        }
    };

    return (
        <>
            {authenticateDto.isAuthenticated ? (
                <div>
                    <li><p>Welcome:{' ' + authenticateDto.user.username}</p></li>
                    <li><Link href="/admin/contacts">Contacts</Link></li>
                    <li><a onClick={() => handleLogout()} style={{ cursor: "pointer" }}>Logout</a></li>
                </div>
            ) : (
                <li><Link href="login" title="">Login</Link></li>
            )}
        </>
    )
}

export default AuthenticationInformation