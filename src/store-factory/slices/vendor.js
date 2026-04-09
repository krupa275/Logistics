import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  requests: [],
  actualQuotes: [],
}

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    addVendorRequest: {
      reducer: (state, action) => {
        state.requests.push(action.payload)
      },
      prepare: (data) => ({
        payload: {
          id: nanoid(),
          ...data,
        },
      }),
    },

    addActualQuoteFromRequest: (state, action) => {
      const req = state.requests.find((r) => r.id === action.payload)

      if (!req) return

      state.actualQuotes.push({
        id: nanoid(),
        inquiryNo: req.inquiryNo,
        vendorName: req.vendorName,
        quotedAmount: "",
        transitDays: "",
        notes: "",
        status: "pending",
      })
    },

    updateActualQuote: (state, action) => {
      const index = state.actualQuotes.findIndex(
        (i) => i.id === action.payload.id,
      )
      if (index !== -1) {
        state.actualQuotes[index] = {
          ...state.actualQuotes[index],
          ...action.payload,
        }
      }
    },
  },
})

export const {
  addVendorRequest,
  addActualQuoteFromRequest,
  updateActualQuote,
} = vendorSlice.actions

export default vendorSlice.reducer
