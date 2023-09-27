import React from 'react'
import { IBackgroundContainer } from '../interfaces/IBackgroundContainer'

const Context = React.createContext({} as IBackgroundContainer)

interface IPropsProvider {
    children: React.ReactNode
}

export function ProviderBackgroundContainer(data: IPropsProvider) {
    const backgroundImageRef = React.useRef<HTMLDivElement>(null)

    return (
        <Context.Provider value={{ backgroundImageRef }}>
            {data.children}
        </Context.Provider>
    )
}

export const useBackgroundContainerContext = () => React.useContext(Context)