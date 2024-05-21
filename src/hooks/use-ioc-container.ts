import { useContext } from 'react'
import { IocContainer, IocContainerContext } from '../context/ioc-container'

export const useIocContainer = (): IocContainer => {
  const context = useContext(IocContainerContext)
  if (context === undefined) {
    throw new Error('useContainer must be used within a ContainerProvider')
  }

  return context
}