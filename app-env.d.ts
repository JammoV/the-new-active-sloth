declare namespace NodeJS {
    export interface ProcessEnv {
        I18N_DOMAIN_NL: string
        I18N_DOMAIN_EN: string
        I18N_USE_LOCALE_PREFIX: 'always' | 'never' | 'as-needed'
        NEXTJS_IMAGE_HOSTNAME: string
    }
}
