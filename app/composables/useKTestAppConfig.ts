export const useKTestAppConfig = () => {
    const appConfig = {
        solution: {
            name: 'Global Fund Sub-Recipients Portal',
            tagline: 'Global Fund Sub-Recipients Portal',
            dataSource: 'NAV',
            userAvatarGeneral: '/images/user-avatar-general.png',
            targetUser: 'Global Fund Sub-Recipient',
        },
        client: {
            name: 'Kenya Redcross Society',
            logoPath: 'https://selfservice.redcross.or.ke:8080/',
            logoPath2: 'https://selfservice.redcross.or.ke:8080/',
            accountProfilePic: 'https://selfservice.redcross.or.ke:8080/',
            bgImagePath: 'https://selfservice.redcross.or.ke:8080/',
        },
        developer: {
            name: 'Kenya Redcross Society',
            logoPath: '/images/client.png',
            websiteUrl: 'https://www.test.com',
            tagline: '',
        },
        errors: {
            generalFailure: "Something went wrong. Kindly refresh the page and try again.",
            dataFetchFailure: "Fetching data failed. If the error persists, contact the system administrator for help.",
            dataDeletionFailure: "Deleting data failed. If the error persists, contact the system administrator for help.",
            validationErrors: "There are validation error(s). Kindly check all the fields."
        },
        baseApiUrl: "/api/",
        maxFileSize: "5MB",
        moduleName: '/gf-sr',
    };

    return { appConfig }
}