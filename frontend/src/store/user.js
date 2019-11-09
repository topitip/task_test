import userAPI from '@/api/user'

export default {

  state: {
    students: [
      {
        FullName: 'Артур Яковлев',
        data: []
      },
      {
        FullName: 'Антон Николаев',
        data: []
      },
      {
        FullName: 'Роман Никольский',
        data: []
      },
      {
        FullName: 'Роман Никольский',
        data: []
      },
      {
        FullName: 'Алексей Лутковский',
        data: []
      },
      {
        FullName: 'Карл Маркс',
        data: []
      },
      {
        FullName: 'Стив Джобс',
        data: []
      }
    ],
    current: undefined,
    lessons: [],
    tabel: 'home'
  },

  mutations: {
    setUsers (state, users) {
      state.users = users.reverse()
    },
    setUser (state, user) {
      state.current = user
    }
  },

  actions: {
    async login ({ commit }, credentials) {
      await userAPI.login(credentials)
    },

    async register ({ commit }, credentials) {
      await userAPI.register(credentials)
    },

    async logout ({ commit }) {
      await userAPI.logout()
      commit('setUser', undefined)
    },

    async getUsers ({ commit }) {
      const users = await userAPI.getUsers()
      commit('setUsers', users)
    },

    async getCurrentUser ({ commit }) {
      const user = await userAPI.getCurrentUser()
      if (user !== 401 && 502) {
        commit('setUser', user)
      }
    }
  }
}
