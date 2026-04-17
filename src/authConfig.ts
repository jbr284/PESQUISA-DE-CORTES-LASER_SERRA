export const msalConfig = {
    auth: {
        // Lembre-se de colar os códigos que você gerou lá no portal do Azure aqui:
        clientId: "COLE_AQUI_SEU_CLIENT_ID_DO_AZURE",
        authority: "https://login.microsoftonline.com/COLE_AQUI_SEU_TENANT_ID_DO_AZURE",
        
        // O seu link exato do GitHub
        redirectUri: "https://jbr284.github.io/PESQUISA-DE-CORTES-LASER_SERRA/",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ["User.Read", "Files.Read.All", "Sites.Read.All"]
};
