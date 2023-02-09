import { Application } from 'express';
import authLocal from './auth/local';
import booking from './api/booking';
import upload from './api/upload';
import user from './api/user';
import menu from './api/menu';
import order from './api/order';
import payment from './api/payment';

function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/payments', payment);
  app.use('/api/bookings', booking);
  app.use('/api/menu', menu);
  app.use('/api/order', order);
  app.use('/api/upload', upload);
  //auth routes
  app.use('/auth/local', authLocal);
};

export default routes;
