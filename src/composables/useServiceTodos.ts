export const useServiceTodos = () => {

    const { $api } = useNuxtApp()

    return {
        async getTodoList() {
            const { data } = await $api.get('/todos');
            return data;
        },
        async getTodoById(id: number) {
            const { data } = await $api.get(`/todos/${id}`);
            return data;
        }
    }
}
