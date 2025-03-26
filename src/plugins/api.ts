import { defineNuxtPlugin } from '#app';
import todoService from '~/services/todoService';
import axios from "axios";

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
            api: apiClient
        }
    };
});
