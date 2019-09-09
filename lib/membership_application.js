var _ = require('underscore')._;
var moment = require('moment');

var MembershipApplication = function(args) {
    
    _.extend(this, args);

    this.validUntil = args.validUntil ? moment(args.validUntil) : moment().add(10, 'days');

    this.expired = () => {
        return this.validUntil.isBefore(moment());
    };

    this.emailIsValid = () => {
        return this.email && this.email.length > 3 && this.email.indexOf("@") > -1;
    }

    this.heightIsValid = () => {
        return this.height && this.height > 60 && this.height < 75;
    }

    this.ageIsValid = () => {
        return this.age && this.age < 100 && this.age > 15;
    }

    this.weightIsValid = () => {
        return this.weight && this.weight > 100 && this.weight < 300;
    }

    this.nameIsValid = () => {
        return this.first && this.last;
    }
    this.isValid = () => {
        return this.emailIsValid() &&
            this.heightIsValid() && 
            this.ageIsValid() &&
            this.weightIsValid();
    }
};

module.exports = MembershipApplication;