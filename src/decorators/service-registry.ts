const serviceRegistry = new Map<string, any>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Service<T>(target: any, _: T) {
  serviceRegistry.set(target.name, new target())
}

export function getService<T>(service: new () => T): T {
  const serviceName = service.name

  const instance = serviceRegistry.get(serviceName)
  if (!instance) {
    throw new Error(`Service ${serviceName} not found`)
  }

  return instance as T
}
