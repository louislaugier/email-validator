import { Button } from "@nextui-org/button";
import { useContext, useEffect, useState } from "react";
import LinkedinIcon from "~/components/icons/logos/LinkedinLogo";
import { linkedinOauthClientId } from "~/constants/oauth/clientIds";
import { linkedinAuthCodeKey, linkedinStateKey, linkedinUniqueStateValue } from "~/constants/oauth/stateKeys";
import { linkedinOauthRedirectUri } from "~/constants/oauth/urls";
import linkedinAuth from "~/services/api/auth/linkedin";
import { AuthCodeEvent } from "~/types/oauth";
import UserContext from "~/contexts/UserContext";
import { handleAuthCode, login } from "~/services/oauth";

const url = 'https://www.linkedin.com/oauth/v2/authorization'
const scope = 'email openid'

export default function LinkedinAuthButton() {
    const [isLoading, setLoading] = useState(false);

    const { setUser, setTemp2faUserId } = useContext(UserContext)
    useEffect(() => {
        const handle = (event: MessageEvent<AuthCodeEvent>) => {
            handleAuthCode(event, setUser, setTemp2faUserId, linkedinAuth, setLoading, linkedinAuthCodeKey, linkedinStateKey);
        };

        window.addEventListener('message', handle);
        return () => window.removeEventListener('message', handle);
    }, []);

    const linkedinLogin = async () => {
        await login(setLoading, linkedinUniqueStateValue, linkedinStateKey, linkedinAuthCodeKey, linkedinOauthClientId, linkedinOauthRedirectUri, url, undefined, scope);
    };

    return (
        <Button style={{ justifyContent: 'flex-start' }} isLoading={isLoading} onClick={linkedinLogin} variant="bordered" color="primary" startContent={<LinkedinIcon />}>
            {isLoading ? 'Loading...' : 'Log in with LinkedIn'}
        </Button>
    );
}
