/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react'
import { injectService } from '../decorators/inject-service'
import { IApiService } from '../interfaces/api-service-interface'

interface MyComponentProps {
  apiService: IApiService
}

const MyComponent: React.FC<MyComponentProps> = ({ apiService }) => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    apiService.get().then(setData)
  }, [apiService])

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
}

// Decorando o componente para injetar a dependência
export default injectService<MyComponentProps>(MyComponent)


