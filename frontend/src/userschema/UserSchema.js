import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormHookYup = (schema) => {
    return useForm({
        resolver: yupResolver(schema),
    });
};

const userSchema = yup.object().shape({
    UserName: yup.string().min(4).max(20).required("User Name is Required & must be between 4 and 20 characters long"),
    email: yup.string().email().required("Email is required"),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must not exceed 20 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/, 'Password must contain at least one number, ' +
            'one uppercase letter, and one lowercase letter')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Passwords do not match")
        .required("Please confirm your password"),
});

export { FormHookYup, userSchema };
