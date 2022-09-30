import * as mongoose from 'mongoose';

export const UserSchema  = new mongoose.Schema(
    {
        name:       { type: String, requied: true},
        username:   { type: String, requied: true},
        email:      { type: String, requied: true},
        password:   { type: String, requied: true},
    },
    { timestamps: true },
);

UserSchema.index({ username:1 }, { unique:true });
UserSchema.index({ email:1 }, { unique: true });

