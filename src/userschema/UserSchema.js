
import * as yup from "yup";

const schema = yup.object().shape({
    userName: yup.string().min(4).max(20).required("User Name is Required & Must be At Least & Characters Long"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Doesn't Match").required(),
})

export default schema;