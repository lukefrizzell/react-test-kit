import React from 'react'
import { render } from '@testing-library/react'
import { mockReactComponent } from './mockReactComponent'

const mocks = mockReactComponent("./Components.tsx", ["Component1", "Component2"])

import { Component1, Component2 } from './Components'


test("Mock jest component", () => {
    render(<><Component1 region={"uk"} /><Component2 region={"us"}/></>)
    expect(mocks.Component1).toHaveBeenCalledWith({region: "uk"})
    expect(mocks.Component2).toHaveBeenCalledWith({region: "us"})
})