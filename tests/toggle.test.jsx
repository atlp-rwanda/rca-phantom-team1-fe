import React from "react"
import Toggle from '../src/components/ui/Toggle';
import {screen, render, act} from "@testing-library/react"
import "@testing-library/jest-dom"


describe("Sample test", function () {
    test('Toggle component should render with "OFF" text', () => {
        render(<Toggle/>);
        const toggleButton = screen.getByText(/^OFF$/)
        expect(toggleButton).toBeInTheDocument()
    });

    test('Toggle component should change text to "ON" when clicked', () => {
        render(<Toggle/>);
        act(() => {// use act for functionalities that require change in state
            screen.getByText(/^OFF$/).click() 
        })
        expect(screen.getByText(/^ON$/)).toBeInTheDocument();
    });

})