import { Tooltip, Button, Link } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useErrorOccurredModal } from "~/contexts/ErrorOccurredModalContext";
import DownloadIcon from "~/components/icons/DownloadIcon";
import { navigateToUrl } from "~/utils/url";
import { getApiBaseUrl } from "~/constants/api";
import { useApiBaseUrl } from "~/hooks/useApiBaseUrl";

export default function DownloadReportButton(props: any) {
    const { tooltipContent, validationId, reportToken } = props;

    const [isLoading, setLoading] = useState(false);

    const apiBaseUrl = useApiBaseUrl();

    const { setErrorOccurredModalVisible } = useErrorOccurredModal();

    const downloadReport = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (apiBaseUrl) {
                navigateToUrl(`${apiBaseUrl}/validation_reports/${validationId}.csv.zip?token=${reportToken}`);
            }
        } catch (error) {
            setErrorOccurredModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    if (!apiBaseUrl) {

    }

    return (
        <>
            <Tooltip content={tooltipContent}>
                <Button
                    as={Link}
                    href={`${apiBaseUrl}/validation_reports/${validationId}.csv.zip?token=${reportToken}`}
                    onClick={downloadReport}
                    isLoading={isLoading}
                    isIconOnly
                    variant="light"
                    aria-label="Download"
                >
                    <DownloadIcon />
                </Button>
            </Tooltip>
        </>
    );
}
