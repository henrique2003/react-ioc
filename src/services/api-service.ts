import { Service } from "../decorators/service-registry"
import { IApiService } from "../interfaces/api-service-interface"

@Service
export class ApiService implements IApiService {
  async get(): Promise<any[]> {
    return await Promise.resolve([
      {
        name: "Leite",
        price: 30.20
      },
      {
        name: "Bolo",
        price: 20.50
      },
      {
        name: "Pizza",
        price: 71.40
      }
    ])
  }
}
