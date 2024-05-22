import React, { createContext, Context, useState, useEffect } from 'react'
import { IocContainerValue, IocContainerProviderProps } from './ioc-container-types'

export const IocContainerContext: Context<IocContainerValue | undefined> = createContext<IocContainerValue | undefined>(undefined)

export const IocContainerProvider: React.FC<IocContainerProviderProps> = ({ children, containers }) => {
  const [containersMap, setContainersMap] = useState(new Map())

  useEffect(() => {
    const mapper = new Map()

    containers.map((containerItem) => {
      mapper.set(containerItem.name, containerItem)
    })

    setContainersMap(mapper)
  }, [containers])

  function getContainer<T>(ctn: new () => T): any {
    return containersMap.get(ctn.name)
  }

  return (
    <IocContainerContext.Provider value={{ getContainer }}>
      {children}
    </IocContainerContext.Provider>
  )
}
