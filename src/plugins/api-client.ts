import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const apiClient = axios.create({
        baseURL: config.public.apiBaseUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return {
        provide: {
            apiClient
        }
    };
});
