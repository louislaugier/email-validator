import { useContext, useEffect, useState } from "react";
import { AuthCodeEvent } from "~/types/oauth";
import { hubspotOauthClientId } from "~/constants/oauth/clientIds";
import { hubspotAuthCodeKey, hubspotStateKey, hubspotUniqueStateValue } from "~/constants/oauth/stateKeys";
import { hubspotOauthRedirectUri } from "~/constants/oauth/urls";
import hubspotAuth from "~/services/api/auth/hubspot";
import { Button } from "@nextui-org/button";
import HubspotIcon from "~/components/icons/logos/HubspotLogo";
import UserContext from "~/contexts/UserContext";
import { handleAuthCode, login } from "~/services/oauth";

const url = 'https://app-eu1.hubspot.com/oauth/authorize'
const scope = 'crm.objects.contacts.read'

export default function HubspotAuthButton(props: any) {
    const { customText } = props;

    const [isLoading, setLoading] = useState(false);

    const { setUser, setTemp2faUserId } = useContext(UserContext)
    useEffect(() => {
        const handle = (event: MessageEvent<AuthCodeEvent>) => {
            handleAuthCode(event, setUser, setTemp2faUserId, hubspotAuth, setLoading, hubspotAuthCodeKey, hubspotStateKey);
        };

        window.addEventListener('message', handle);
        return () => window.removeEventListener('message', handle);
    }, []);

    const hubspotLogin = async () => {
        await login(setLoading, hubspotUniqueStateValue, hubspotStateKey, hubspotAuthCodeKey, hubspotOauthClientId, hubspotOauthRedirectUri, url, undefined, scope);
    };

    return (
        <Button style={{ justifyContent: 'flex-start' }} isLoading={isLoading} onClick={hubspotLogin} variant="bordered" color="primary" startContent={!customText && <HubspotIcon />}>
            {isLoading ? 'Loading...' : customText ?? 'Log in with HubSpot'}
        </Button>
    );
}
