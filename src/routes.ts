import { Application } from 'express';
import authLocal from './auth/local';
import booking from './api/booking';
import user from './api/user';
import menu from './api/menu';
import order from './api/order';

function routes(app: Application): void {
  app.use('/api/users', user);

  app.use('/api/bookings', booking);
  app.use('/api/menu', menu);
  app.use('/api/order', order);
  //auth routes
  app.use('/auth/local', authLocal);
};

export default routes;
