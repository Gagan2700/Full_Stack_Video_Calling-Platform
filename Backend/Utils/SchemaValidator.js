import joi from 'joi'

const userSchema = joi.object({
    username:joi.string().required(),
    name:joi.string().required(),
    password:joi.string().required(),
})

export default userSchema;