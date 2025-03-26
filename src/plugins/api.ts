import { defineNuxtPlugin } from '#app';
import todoService from '~/services/todoService';

export default defineNuxtPlugin((nuxtApp) => {
    const apiClient = nuxtApp.$apiClient;

    return {
        provide: {
            api: {
                todos: todoService(apiClient),
            }
        }
    };
});
