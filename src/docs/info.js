export const info = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Ecommerce - Proyecto Final Coderhouse',
            version: '1.0.0',
            description: 'API Rest NodeJS - Express - MongoDB '
        },
        servers: [
            { 
                url: 'http://localhost:3002'
            }
        ]
    },
    apis: ['./src/docs/*.yml']
}