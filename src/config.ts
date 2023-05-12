export interface domainConfig {
    script: string;
    style?: string;
}

export const buildCongifMap = (json: any) => {
    const DOMAIN_CONF = new Map<string, domainConfig>();
    Object.keys(json).forEach(key => {
        DOMAIN_CONF.set(key, json[key]); 
    });
}