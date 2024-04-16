import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormHookYup = (schema) => {
    return useForm({
        resolver: yupResolver(schema),
    });
};

const userSchema = yup.object().shape({
    username: yup.string().min(4).max(30).required("User Name is Required & must be between 4 and 30 characters long"),
    email: yup.string().email().required("A Valid Email is required"),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must not exceed 20 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/, 'Use a mix of Upper & lower case letters with a Number')
        .required('Password is required'),
});

export { FormHookYup, userSchema };
