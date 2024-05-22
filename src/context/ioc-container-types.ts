import { ReactNode } from "react"

export type IocContainerValue = {
  getContainer: <T>(contaier: new () => T) => any
}

type IContainer<> = new <T>() => T

export type IocContainerProviderProps = {
  containers: IContainer[]
  children: ReactNode
}