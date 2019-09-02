//created this file seperatly , so we can use in different projects just by copying the file.
//also if you want to change lirary you have only one file to edit.
import axios from 'axios';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/browser';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        Sentry.captureException(error);
        toast.error('Sorry!!! Unexpected error with the request, make sure you have internet');
    }
    // this goes to the catch block of the function that catch the error.
    return Promise.reject(error);
});

export default {
    get: axios.get
};