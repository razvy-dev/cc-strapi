
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::events.event', ({ strapi }) =>  ({

    async getEvents(pagination) {
        try {

        } catch (err) {
            console.log("There was a backend error while getting events")
        }
    },

    async getEventById(id) {
        try {

        } catch (err) {
            console.log(err)
        }
    },

    async participate(ctx) {
        try {

        } catch (err) {
            console.log("There was an error while adding the participant to the event", err)
        }
    }
    
}));