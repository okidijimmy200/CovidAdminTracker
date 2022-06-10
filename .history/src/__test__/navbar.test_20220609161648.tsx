import React from "react";
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Na


describe('Test Navbar', () => {
    it('renders without crashing', () => {
        const { baseElement } = render(<Navb)
        expect(baseElement).toBeInTheDocument()
    })
})