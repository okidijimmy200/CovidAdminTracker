import React from "react";
import { render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Sidebar from '../sidebar/sidebar'


describe('Test Sidebar', () => {
    it('renders without crashing', () => {
        const { baseElement } = render(<Sidebar />)
        expect(baseElement).toBeInTheDocument()
    })
})