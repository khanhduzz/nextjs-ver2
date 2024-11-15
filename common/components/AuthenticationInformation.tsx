import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

type AuthenticateUser = {
    username: string;
}

type AuthenticateInformationDto = {
    isAuthenticated: boolean;
    user: AuthenticateUser;
}

const AuthenticationInformation = () => {
    const router = useRouter();
    const { pathname } = router;

    const isCurrent = (path: string) => pathname === path;

    const [authenticateDto, setAuthenticateDto] = useState<AuthenticateInformationDto>({
        isAuthenticated: false,
        user: { username: '' }
    })

    async function getAuthenticationInformation(): Promise<AuthenticateInformationDto> {
        const response = await fetch('/api/auth',
            { method: "GET", credentials: 'include' }
        );
        return await response.json();
    }

    useEffect(() => {
        getAuthenticationInformation().then((data) => {
            setAuthenticateDto(data);

        });
    }, []);

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
            });
            if (response.status === 200) {
                setAuthenticateDto({ isAuthenticated: false, user: { username: "" } });
                sessionStorage.removeItem("user")
                window.location.href = "/";
                // router.push("/");
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
                <>
                    <li className={isCurrent('/admin/contacts') ? 'current' : ''}><a href="/admin/contacts">Contacts</a></li>
                    <li><a onClick={() => handleLogout()} style={{ cursor: "pointer" }}>Logout</a></li>
                    <li><p>Welcome:{' ' + authenticateDto.user.username}</p></li>
                </>
            ) : (
                <>
                    <li className={isCurrent('/contact') ? 'current' : ''}><a href="/contact" title="">Contact</a></li>
                    <li className={isCurrent('/login') ? 'current' : ''}><a href="login" title="">Login</a></li>
                </>
            )}
        </>
    )
}

export default AuthenticationInformation