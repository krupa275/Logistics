import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  roles: [],
  mappings: [],
  branchAccess: [],
}

const usersSlices = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload)
      },
      prepare: (data) => ({
        payload: { id: nanoid(), ...data },
      }),
    },
    updateUser: (state, action) => {
      const i = state.users.findIndex((u) => u.id === action.payload.id)
      if (i !== -1) state.users[i] = action.payload
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload)
    },

    addRole: {
      reducer: (state, action) => {
        state.roles.push(action.payload)
      },
      prepare: (data) => ({
        payload: { id: nanoid(), ...data },
      }),
    },
    deleteRole: (state, action) => {
      state.roles = state.roles.filter((r) => r.id !== action.payload)
    },

    assignRole: (state, action) => {
      state.mappings.push({ id: nanoid(), ...action.payload })
    },

    setBranchAccess: (state, action) => {
      const index = state.branchAccess.findIndex(
        (b) =>
          b.roleId === action.payload.roleId &&
          b.branch === action.payload.branch,
      )
      if (index !== -1) {
        state.branchAccess[index] = action.payload
      } else {
        state.branchAccess.push({ id: nanoid(), ...action.payload })
      }
    },
  },
})

export const {
  addUser,
  updateUser,
  deleteUser,
  addRole,
  deleteRole,
  assignRole,
  setBranchAccess,
} = usersSlices.actions

export default usersSlices.reducer
