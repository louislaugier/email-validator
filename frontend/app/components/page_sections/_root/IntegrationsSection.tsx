import BrevoLogo from "~/components/icons/logos/BrevoFullLogo";
import HubspotFullLogo from "~/components/icons/logos/HubspotFullLogo";
import SalesforceLogo from "~/components/icons/logos/SalesforceFullLogo";
import SendgridFullLogo from "~/components/icons/logos/SendgridFullLogo";
import ZohoLogo from "~/components/icons/logos/ZohoFullLogo";

const IntegrationsSection = () => {
    return (
        <div style={{ marginBottom: 233 }}>
            <div className="py-10 bg-gray-100 absolute" style={{ left: 0, width: '100%' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900">
                        Connect your CRMs and marketing platforms
                    </h2>
                    <div className="flex mt-12" style={{ justifyContent: 'space-between', maxWidth: '1024px', marginRight: 'auto', marginLeft: 'auto' }}>
                        <SalesforceLogo w={100} />
                        <ZohoLogo w={"120px"} />
                        <HubspotFullLogo />
                        <SendgridFullLogo />
                        <BrevoLogo />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default IntegrationsSection;
