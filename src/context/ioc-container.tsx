import React, { createContext, ReactNode, Context } from 'react'

export interface IocContainer {
  [key: string]: any
}

export const IocContainerContext: Context<IocContainer | undefined> = createContext<IocContainer | undefined>(undefined)

interface IocContainerProviderProps {
  container: IocContainer
  children: ReactNode
}

export const IocContainerProvider: React.FC<IocContainerProviderProps> = ({ container, children }) => (
  <IocContainerContext.Provider value={container}>
    {children}
  </IocContainerContext.Provider>
)
