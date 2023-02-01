import { Application } from 'express';
import authLocal from './auth/local';
import booking from './api/booking';
import user from './api/user';
import menu from './api/menu';

function routes(app: Application): void {
  app.use('/api/users', user);

  app.use('/api/bookings', booking);
  app.use('/api/menu', menu);
  //auth routes
  app.use('/auth/local', authLocal);
};

export default routes;
