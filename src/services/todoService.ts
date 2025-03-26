export default (apiClient: any) => ({
    async getTodoList() {
        const { data } = await apiClient.get('/todos');
        return data;
    },
    async getTodoById(id: number) {
        const { data } = await apiClient.get(`/todos/${id}`);
        return data;
    }
});
