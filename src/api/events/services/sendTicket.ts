// this service will be used to send emails when needed, useing the email service to create those emails how they need to be creeated


import { factories } from '@strapi/strapi'; 

export default factories.createCoreService('api::events.events', ({ strapi }) =>  ({
    async sendTicket(destination, event) {
        try {

        } catch (err) {
            console.log("There was an error while sending this email to the user", err)
        }
    }
}));