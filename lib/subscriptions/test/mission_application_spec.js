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
  

       describe("Application invalid if...", () => {
           it('email is 4 character or less', () => {
               var app = new MembershipApplication({email: "DD"});
               assert(!app.emailIsValid());
            });
            
            it('email does not contain an @', () => {
               var app = new MembershipApplication({email: "asddasasasd.com"});
               assert(!app.emailIsValid());
            });

            it('age is omitted', () => {
               var app = new MembershipApplication();
               assert(!app.ageIsValid());
            });
            
            it('weight less than 100', () => {
               var app = new MembershipApplication({weight: 99});
               assert(!app.weightIsValid());
            });

            it('weight less more than 300', () => {
               var app = new MembershipApplication({weight: 301});
               assert(!app.weightIsValid());
            });

            it('weight is omitted', () => {
               var app = new MembershipApplication();
               assert(!app.weightIsValid());
            });

            it('first name is omited', () => {
               var app = new MembershipApplication();
               assert(!app.emailIsValid());
            });

            it('lst name is omitted', () => {
                var app = new MembershipApplication();
                assert(!app.nameIsValid());
            });
        });
    });
});

