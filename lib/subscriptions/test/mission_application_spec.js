var assert = require('assert');
var MembershipApplication = require("../../membership_application");
describe('Membership application requiements', () => {
    describe('Application valid if...', () => {
       var validApp;
       
       before(() => {
        validApp = new MembershipApplication({
            first: "Test",
            last: "User",
            email: "test@test.com",
            age: 30,
            height: 66,
            weight: 180
        });
       });
    
       it('Application is valid if all validators return true', () => {
           assert(validApp.isValid(), "Not valid");
       });
    
       it('email is 4 or more chars and contains an @' , () => {
           assert(validApp.emailIsValid());
       });
    
       it('height is between 60 and 75 inches', () => {
           assert(validApp.heightIsValid());
       });
    
       it('age is between 15 and 100', () => {
           assert(validApp.ageIsValid());
       });

       it('weight is between 100 and 300', () => {
           assert(validApp.weightIsValid());
       });

       it('first and last name are provided', () => {
           assert(validApp.nameIsValid());
       });
  

       describe("Application invalif if...", () => {
           it('email is 4 character or less', () => {
               validApp.email = "d@d";
               assert(!validApp.emailIsValid());
            });
        });
    });
});

