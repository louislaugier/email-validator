import { Divider } from "@nextui-org/divider";
import EmailAuthButton from "./Email";
import GoogleAuthButton from "./Google";
import HubspotAuthButton from "./Hubspot";
import LinkedinAuthButton from "./Linkedin";
import MailchimpAuthButton from "./Mailchimp";
import SalesforceAuthButton from "./Salesforce";
import ZohoAuthButton from "./Zoho";
import EmailAuthForm from "./Email/AuthForm";
import { ArrowBackIcon } from "~/icons/ArrowBackIcon";
import { Button } from "@nextui-org/react";

export default function Auth(props: any) {
    const { isSubmitButtonVisible, setSubmitButtonVisible } = props

    return (
        isSubmitButtonVisible ? <>
            <Button onClick={() => setSubmitButtonVisible(false)} className="border-none" isIconOnly variant="ghost" aria-label="Back">
                <ArrowBackIcon />
            </Button>

            <EmailAuthForm />
        </> :
            <div className="flex flex-col py-4" style={{ width: '90%', alignItems: 'center', margin: 'auto' }}>
                <div className="gap-2 flex flex-col" style={{ width: '220px' }}>

                    <SalesforceAuthButton />
                    <HubspotAuthButton />
                    <ZohoAuthButton />
                    <MailchimpAuthButton />
                </div>

                <Divider className="my-6" />

                <div className="gap-2 flex flex-col" style={{ width: '220px' }}>
                    <LinkedinAuthButton />
                    <GoogleAuthButton />

                    {/* <FacebookAuthButton /> */}
                    {/* <AppleAuthButton /> */}
                </div>

                <Divider className="my-6" />
                <div className="gap-2 flex flex-col" style={{ width: '220px' }}>
                    <EmailAuthButton onClick={() => setSubmitButtonVisible(true)} />
                </div>
            </div>
    )
}