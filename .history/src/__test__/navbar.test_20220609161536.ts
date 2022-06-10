import React from "react";
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../navbar/navbar";


describe('Test Navbar', () => {
    it('renders without crashing', () => {
        const { baseElement } = render(<Nav)
        expect(baseElement).toBeInTheDocument()
    })
})