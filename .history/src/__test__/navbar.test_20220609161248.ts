import React from "react";
import { render, fireEvent } from '@testing-library/react'
import Navbar from "../navbar/navbar";


describe('Test Navbar', () => {
    it('renders without crashing', () => {
        const { baseElement } = render(<Navbar />)
        expect(baseElement).toBeIn
    })
})