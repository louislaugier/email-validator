import { useContext, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import UserContext from "~/contexts/UserContext";
import AuthButtons from "~/components/buttons/AuthButtons";
import { AuthModalType } from "~/types/modal";
import signup from "~/services/api/signup";
import { useSearchParams } from "@remix-run/react";
import CodeConfirmationForm from "../../forms/CodeConfirmationForm";
import confirmEmail from "~/services/api/confirm_email_address";
import login from "~/services/api/login";
import { navigateToUrl } from "~/utils/url";

export default function SignupLoginModal(props: any) {
    const { isOpen, onClose, onOpenChange, modalType } = props;

    const { user, setUser, setTemp2faUserId } = useContext(UserContext);

    const [searchParams] = useSearchParams();
    const isEmailAddressToConfirmCall = searchParams.get("email_to_confirm")

    const [isSubmitButtonVisible, setSubmitButtonVisible] = useState(!!isEmailAddressToConfirmCall ?? false)

    const close = () => {
        setSubmitButtonVisible(false);
        onClose()
    }

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    const [signupEmail, setSignupEmail] = useState(isEmailAddressToConfirmCall)
    const [signupPassword, setSignupPassword] = useState("")

    const [isLoading, setLoading] = useState(false)

    const [loginError, setLoginError] = useState('')
    const [signupError, setSignupError] = useState('')

    const isSignup = modalType === AuthModalType.Signup
    const isLogin = modalType === AuthModalType.Login

    const [isSignupEmailSent, setSignupEmailSent] = useState(!!isEmailAddressToConfirmCall ?? false)

    const [signupConfirmationCode, setSignupConfirmationCode] = useState('')
    const [confirmationCodeError, setConfirmationCodeError] = useState('')

    return (
        !user &&
        <>
            <Modal
                backdrop="blur"
                onClose={close}
                style={{ maxWidth: "375px" }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modalType}</ModalHeader>
                            <ModalBody>
                                {isSignup && isSignupEmailSent ? <>
                                    <CodeConfirmationForm error={confirmationCodeError} code={signupConfirmationCode} setCode={setSignupConfirmationCode} />
                                </> : <AuthButtons signupEmail={signupEmail} signupPassword={signupPassword} setSignupEmail={setSignupEmail} setSignupPassword={setSignupPassword} loginEmail={loginEmail} loginPassword={loginPassword} setLoginEmail={setLoginEmail} setLoginPassword={setLoginPassword} isSubmitButtonVisible={isSubmitButtonVisible} setSubmitButtonVisible={setSubmitButtonVisible} modalType={modalType} loginError={loginError} signupError={signupError} />}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="bordered" onPress={onClose}>
                                    Close
                                </Button>
                                {isSubmitButtonVisible && <Button isLoading={isLoading} onClick={async () => {
                                    setLoading(true)

                                    try {
                                        if (isLogin) {
                                            const res = await login({ email: loginEmail, password: loginPassword })

                                            if (res.email) {
                                                setUser(res)
                                                navigateToUrl('/dashboard')
                                            } else if (res.is2faEnabled) {
                                                setTemp2faUserId(res.id)
                                            } else if (res.error) {
                                                setLoginError(res.error)
                                            }
                                        } else if (isSignup) {
                                            if (!!isEmailAddressToConfirmCall) {
                                                const res = await confirmEmail({ email: signupEmail, isNewAccount: true, emailConfirmationCode: signupConfirmationCode })
                                                if (res.error) setConfirmationCodeError(res.error)
                                                
                                                // should redirect to confirmation modal with link to sign in
                                            } else {
                                                const res = await signup({ email: signupEmail, password: signupPassword })

                                                if (res.error) setSignupError(res.error)

                                                setSignupEmailSent(true)
                                            }
                                        }
                                    } catch {
                                        const err = 'An unexpected error has occurred. Please try again.'
                                        if (isLoading) setLoginError(err)
                                        else if (isSignup) setSignupError(err)
                                    }

                                    setLoading(false)
                                }} color="primary" variant="shadow" onPress={onClose}>
                                    {isLoading ? 'Loading' : isSignupEmailSent ? 'Submit' : modalType}
                                </Button>}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
