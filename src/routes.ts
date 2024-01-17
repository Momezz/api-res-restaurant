import { Application } from 'express';
import booking from './api/booking';
import upload from './api/upload';
import user from './api/user';
import menu from './api/menu';
import order from './api/order';
import payment from './api/payment';
import publications from './api/publication';
import healthcheck from './api/healthcheck';
import authLocal from './auth/local';

function routes(app: Application): void {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/payments', payment);
  app.use('/api/bookings', booking);
  app.use('/api/menu', menu);
  app.use('/api/order', order);
  app.use('/api/publications', publications);
  app.use('/api/upload', upload);
  app.use('/auth/local', authLocal);
};

export default routes;
