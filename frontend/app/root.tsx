import { NextUIProvider } from "@nextui-org/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { googleOauthClientId } from "./constants/oauth/clientIds";
import { AuthModalProvider } from "./contexts/AuthModalContext";
import { ErrorOccurredModalProvider } from "./contexts/ErrorOccurredModalContext";
import { UserProvider } from "./contexts/UserContext";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <noscript>
          <style>
            {`.no-js { display: block; } .js { display: none; }`}
          </style>
          <div className="no-js">
            <p>JavaScript is required to use this application. Please enable JavaScript in your browser settings.</p>
          </div>
        </noscript>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            try {
              localStorage.setItem('test', 'test');
              localStorage.removeItem('test');
            } catch (e) {
              document.body.innerHTML = '<p>"localStorage" is required to use this application. Please enable it in your browser settings.</p>';
            }
            var popup = window.open('', '', 'width=1,height=1');
            if (!popup || popup.closed || typeof popup.closed == 'undefined') {
              document.body.innerHTML = '<p>Popups are required to use this application. Please enable them in your browser settings.</p>';
            } else {
              popup.close();
            }
          })();
        `}} />
      </head>
      <body>
        <ErrorOccurredModalProvider>
          <UserProvider>
            <AuthModalProvider>
              <NextUIProvider>
                <main className="text-foreground bg-background">
                  <GoogleOAuthProvider clientId={googleOauthClientId}>
                    <Nav />
                    <div style={{ maxWidth: 1024, margin: 'auto', minHeight: 'calc(100vh - 177px)' }}>
                      <Breadcrumb />
                      {children}
                    </div>
                    <Footer />
                  </GoogleOAuthProvider>
                </main>
              </NextUIProvider>
            </AuthModalProvider>
          </UserProvider>
        </ErrorOccurredModalProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
