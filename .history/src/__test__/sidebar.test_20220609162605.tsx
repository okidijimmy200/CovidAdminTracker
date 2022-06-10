import React from "react";
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Sidebar from '../sidebar/sidebar'


describe('Test S', () => {
    it('renders without crashing', () => {
        const { baseElement } = render(<S />)
        expect(baseElement).toBeInTheDocument()
    })
})