import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  filters: {
    search: "",
    status: "all",
    page: 1,
    limit: 5,
  },
}

const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    addInquiry: {
      reducer: (state, action) => {
        state.list.unshift(action.payload)
      },
      prepare: (data) => ({
        payload: {
          id: nanoid(),
          inquiryNo: `INQ-${Date.now()}`,
          status: "pending",
          ...data,
        },
      }),
    },

    updateInquiry: (state, action) => {
      const index = state.list.findIndex((i) => i.id === action.payload.id)
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload }
      }
    },

    deleteInquiry: (state, action) => {
      state.list = state.list.filter((i) => i.id !== action.payload)
    },

    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
  },
})

export const { addInquiry, updateInquiry, deleteInquiry, setFilters } =
  inquirySlice.actions
export default inquirySlice.reducer
