var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    nickname: String,
    typeUser: String,
    souscategoryUser: String,
    role: { type: Number, default: 0},
    url: { type: String },
    token: { type: Schema.Types.ObjectId },
    favoris: [ Schema.Types.ObjectId ],
    cptComments : { type: Number, default: 0 },
    comments: [{
    	comments: String,
    	idItem: Schema.Types.ObjectId,
    }],
  premium: { type: Boolean, default: false },
  success: []
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
