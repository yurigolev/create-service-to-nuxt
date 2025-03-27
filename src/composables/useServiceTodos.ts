export const useServiceTodos = () => {
    const { $api } = useNuxtApp();

    return {
        getTodoList: () => {
            // Какая нибудь логика по обработке данных, проверки и т.д.
            return $api.get<any, any>('/todos').then(res => res.data)
        },

        getTodoById: (id: number | null) => {
            // Какая нибудь логика по обработке данных, проверки и т.д.
            if (id === null) {
                return null
            }
            return $api.get<any, any>(`/todos/${id}`).then(res => res.data)
        }
    };
};
