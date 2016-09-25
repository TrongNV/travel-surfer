import { orderDate } from '../utils/Helper';


export default {

  app_name: '<span class="logo-name">TravelSurɟer</span> <small>manager</small>',

  orders: {
    table: {
      thead: [
        {
          name: 'user_email',
          title: 'User Email'
        },
        {
          name: 'offers',
          title: 'Offers',
          func: (v) => {return v.length}
        },
        {
          name: 'push_notifications',
          title: 'Push Notifications'
        },
        {
          name: 'status',
          title: 'Status'
        },
        {
          name: 'created_at',
          title: 'Posted',
          func: orderDate
        }
      ]
    }
  }

}
