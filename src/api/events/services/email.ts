// this service will write the email model that will be sent to who is participating and generate the QR code of the ticket


import { factories } from '@strapi/strapi'; 

export default factories.createCoreService('api::events.events', ({ strapi }) =>  ({

    async generateQR(ticketId) {
        try {

        } catch (err) {
            console.log("There was an error when generating the QR code for the", ticketId, " ticket: ", err)
        }
    },

    async email(ctx: any) {
        try {

            const { destination, event } = ctx.body

            } catch (err) {
            console.log("There was an error when sending the email to the user: ", err)
        }
    },

}));