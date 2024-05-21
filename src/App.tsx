import { IocContainerProvider } from "./context/ioc-container"
import { ApiService } from "./services/api-service"

const container = {
  apiService: new ApiService()
}

function App() {
  return (
    <IocContainerProvider container={container}>
      <div></div>
    </IocContainerProvider>
  )
}

export default App
