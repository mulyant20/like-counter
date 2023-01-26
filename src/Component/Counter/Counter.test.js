import React from 'react'
import { fireEvent, getByTestId, getByText, render } from '@testing-library/react'
import Counter from './Counter'

test('it should increment when click', () => {
    const utils = render(<Counter/>)
    const div = utils.container
    const btnCounter = div.firstChild.querySelector('.btnCounter')
    const counter = div.firstChild.querySelector('.counter')

    // assertion jest
    expect(counter.textContent).toBe('0')

    fireEvent.click(btnCounter)

    // custom jest matchers
    expect(counter).toHaveTextContent('1')
})