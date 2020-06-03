import React from 'react'

export const mockReactComponent = (moduleName: string, componentNames: string[]): any => {
    const getMock = () => {
        const MockReactComponentConstructor = jest.fn()

        return { 
            mockComponent: class MockReactComponent extends React.Component {
                constructor(props: any) {
                    super(props)
                    MockReactComponentConstructor(props)
                }
            
                render() {
                    return <>Hello world</>
                }
            },
            mockConstructor: MockReactComponentConstructor
        }
    }
   
    
    const exports = {}
    const mockConstructors = {}

    componentNames.map(name => {
        const { mockComponent, mockConstructor } = getMock()
        Reflect.set(exports, name, mockComponent)
        Reflect.set(mockConstructors, name, mockConstructor)
    })
    

    jest.mock(moduleName, () => (exports))

    return mockConstructors
}