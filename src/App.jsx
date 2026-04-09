// import { RouterProvider } from 'react-router-dom';
import { RouterProvider } from "react-router-dom"
import { ErrorBoundary } from "@/components/common/error-boundary"
import { router } from "./routes"
import { Provider } from "react-redux"
import { persistor, store } from "./store-factory"
import { PersistGate } from "redux-persist/integration/react"

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}
