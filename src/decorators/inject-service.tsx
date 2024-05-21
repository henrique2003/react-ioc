import { getService } from './service-registry'

type Constructor<T> = new (...args: any[]) => T

// export function injectService<T>(ServiceClass: Constructor<T>) {
//   return function <P>(WrappedComponent: React.FC<P>): React.FC<Omit<P, keyof T>> {
//     return (props: Omit<P, keyof T>) => {
//       const service = getService(ServiceClass)

//       return <WrappedComponent {...(props as P & T)} {...{ [ServiceClass.name]: service }} />
//     }
//   }
// }

export function injectService<P>(WrappedComponent: React.FC<P>): React.FC<P> {

}
