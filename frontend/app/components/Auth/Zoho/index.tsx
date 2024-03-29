import { useEffect, useState } from 'react';
import { AuthCodeEvent } from '~/types/oauth';
import { zohoOauthClientId } from '~/constants/oauth/clientIds';
import { zohoAuthCodeKey, zohoStateKey, zohoUniqueStateValue } from '~/constants/oauth/stateKeys';
import { zohoOauthRedirectUri } from '~/constants/oauth/urls';
import zohoAuth from '~/services/api/auth/zoho';
import { handleAuthCode, login } from '~/services/auth/oauth';
import { Button } from '@nextui-org/button';
import ZohoIcon from '~/icons/logos/Zoho';

const url = 'https://accounts.zoho.com/oauth/v2/auth'
const scope = 'ZohoCRM.modules.contacts.READ ZohoCRM.modules.leads.READ ZohoCRM.modules.vendors.READ ZohoCRM.modules.accounts.READ ZohoCRM.users.READ'

export default function ZohoAuthButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handle = (event: MessageEvent<AuthCodeEvent>) => {
      handleAuthCode(event, zohoAuth, setLoading, zohoAuthCodeKey, zohoStateKey);
    };

    window.addEventListener('message', handle);
    return () => window.removeEventListener('message', handle);
  }, []);

  const zohoLogin = async () => {
    await login(setLoading, zohoUniqueStateValue, zohoStateKey, zohoAuthCodeKey, zohoOauthClientId, zohoOauthRedirectUri, url, undefined, scope);
  };

  return (
    <Button style={{ justifyContent: 'flex-start' }} isDisabled={isLoading} onClick={zohoLogin} variant="bordered" startContent={<ZohoIcon />}>
      {isLoading ? 'Loading...' : 'Log in with Zoho'}
    </Button>
  )
}
