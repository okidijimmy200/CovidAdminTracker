import React from "react";
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Sidebar from '../sidebar/sidebar'


describe('Test Sidebar=> {
        const { baseElement } = render(<Navbar />)
        expect(baseElement).toBeInTheDocument()
    })

    it('renders sidebar without')
})