import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/crmController';
const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    //Post endpoint
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    //get specific contact
    .get(getContactWithID)
    // Update specific contact
    .put(updateContact)
    //delete specific contaact
    .delete(deleteContact);
};

export default routes;
