import userAPI from '@/api/user'

export default {

  state: {
    students: [
      {
        id: 0,
        FullName: 'Артур Яковлев',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      },
      {
        id: 1,
        FullName: 'Антон Николаев',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      },
      {
        id: 2,
        FullName: 'Роман Никольский',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      },
      {
        id: 3,
        FullName: 'Роман Никольский',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      },
      {
        id: 4,
        FullName: 'Алексей Лутковский',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      },
      {
        id: 5,
        FullName: 'Карл Маркс',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      },
      {
        id: 6,
        FullName: 'Стив Джобс',
        lessonTitle0: {
          grades: [],
          skeaps: []
        },
        lessonTitle1: {
          grades: [],
          skeaps: []
        },
        lessonTitle2: {
          grades: [],
          skeaps: []
        },
        lessonTitle3: {
          grades: [],
          skeaps: []
        },
        lessonTitle4: {
          grades: [],
          skeaps: []
        },
        lessonTitle5: {
          grades: [],
          skeaps: []
        }
      }
    ],
    headersGrades: [],
    lessons: [],
    tabel: 'home'
  },

  mutations: {
    setUsers (state, users) {
      state.users = users.reverse()
    },
    setUser (state, user) {
      state.current = user
    },
    setGrade (state, payload) {
      switch (payload.lesson) {
        case 'lessonTitle0':
          state.students[payload.student].lessonTitle0.grades.push({
            grade: payload.grade
          })
          break

        case 'lessonTitle1':
          state.students[payload.student].lessonTitle1.grades.push({
            grade: payload.grade
          })
          break

        case 'lessonTitle2':
          state.students[payload.student].lessonTitle2.grades.push({
            grade: payload.grade
          })
          break

        case 'lessonTitle3':
          state.students[payload.student].lessonTitle3.grades.push({
            grade: payload.grade
          })
          break

        case 'lessonTitle4':
          state.students[payload.student].lessonTitle4.grades.push({
            grade: payload.grade
          })
          break

        case 'lessonTitle5':
          state.students[payload.student].lessonTitle5.grades.push({
            grade: payload.grade
          })
          break

        default:
          console.log('error')
          break
      }
    },
    setSkeap (state, payload) {
      switch (payload.lesson) {
        case 'lessonTitle0':
          state.students[payload.student].lessonTitle0.skeaps = []
          state.students[payload.student].lessonTitle0.skeaps.push({
            skippingReason: payload.skippingReason,
            skippingNoReason: payload.skippingNoReason
          })
          break

        case 'lessonTitle1':
          state.students[payload.student].lessonTitle1.skeaps = []
          state.students[payload.student].lessonTitle1.skeaps.push({
            skippingReason: payload.skippingReason,
            skippingNoReason: payload.skippingNoReason
          })
          break

        case 'lessonTitle2':
          state.students[payload.student].lessonTitle2.skeaps = []
          state.students[payload.student].lessonTitle2.skeaps.push({
            skippingReason: payload.skippingReason,
            skippingNoReason: payload.skippingNoReason
          })
          break

        case 'lessonTitle3':
          state.students[payload.student].lessonTitle3.skeaps = []
          state.students[payload.student].lessonTitle3.skeaps.push({
            skippingReason: payload.skippingReason,
            skippingNoReason: payload.skippingNoReason
          })
          break

        case 'lessonTitle4':
          state.students[payload.student].lessonTitle4.skeaps = []
          state.students[payload.student].lessonTitle4.skeaps.push({
            skippingReason: payload.skippingReason,
            skippingNoReason: payload.skippingNoReason
          })
          break

        case 'lessonTitle5':
          state.students[payload.student].lessonTitle5.skeaps = []
          state.students[payload.student].lessonTitle5.skeaps.push({
            skippingReason: payload.skippingReason,
            skippingNoReason: payload.skippingNoReason
          })
          break

        default:
          console.log('error')
          break
      }
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
    },

    async addGrade ({ commit }, payload) {
      switch (payload.lesson) {
        case 'lessonTitle0':
          commit('setGrade', payload)
          break

        case 'lessonTitle1':
          commit('setGrade', payload)
          break

        case 'lessonTitle2':
          commit('setGrade', payload)
          break

        case 'lessonTitle3':
          commit('setGrade', payload)
          break

        case 'lessonTitle4':
          commit('setGrade', payload)
          break

        case 'lessonTitle5':
          commit('setGrade', payload)
          break

        default:
          console.log('error in acton')
          break
      }
    },

    async addSkeap ({ commit }, payload) {
      switch (payload.lesson) {
        case 'lessonTitle0':
          commit('setSkeap', payload)
          break

        case 'lessonTitle1':
          commit('setSkeap', payload)
          break

        case 'lessonTitle2':
          commit('setSkeap', payload)
          break

        case 'lessonTitle3':
          commit('setSkeap', payload)
          break

        case 'lessonTitle4':
          commit('setSkeap', payload)
          break

        case 'lessonTitle5':
          commit('setSkeap', payload)
          break

        default:
          console.log('error in acton')
          break
      }
    }
  }
}
