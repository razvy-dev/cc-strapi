
export default {
  routes: [
    {
      method: 'GET',
      path: '/events/getEvents',
      handler: 'api::events.events.getEvents',
      config: {
        policies: [
        
        ]
      },
    },
  ],
};