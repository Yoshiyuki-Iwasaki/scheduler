const posts = (state: any[] = [], action: any) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event: any = { title: action.title, body: action.body };
      const length: number = state.length;
      const id: number = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state.filter((event: any) => event.id !== action.id);
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state;
  }
};

export default posts;
