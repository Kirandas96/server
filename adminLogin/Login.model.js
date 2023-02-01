const mongoose = require("mongoose");


const adminSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


// adminSchema.pre("save",function(next){
//     if(!this.isModified("password")) return next()
//     const hash = bcrypt.hashSync(this.password,8)
//     this.password=hash
//     next()
  
//   })
  
//   adminSchema.methods.checkPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
//   };

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;

