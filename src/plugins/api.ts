import { defineNuxtPlugin } from '#app';
import axios from "axios";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const api = axios.create({
        baseURL: config.public.apiBaseUrl
    });

    api.interceptors.request.use(
        config => {
            return config;
        },
        error => {
            if (error) {
                // useToastError(error);
            }
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        response => response,
        error => {
            if (error) {
                // useToastError(error);
            }
            return Promise.reject(error);
        }
    );

    return {
        provide: {
            api
        }
    };
});
