export const limits = {
    free: {
        app: 500,
        api: 30,
        apiConcurrency: 1
    },
    premium: {
        app: 10000,
        api: 3000,
        apiConcurrency: 3
    },
    enterprise: {
        apiBulkConcurrency: 3,
    },
    uploadFileSizeMegaBytes: 30,
}