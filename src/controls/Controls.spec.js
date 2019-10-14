// Test away!
import React from 'react';
import Controls from './Controls'
import { render, fireEvent } from '@testing-library/react';


test('tests that open button is disabled if gate is locked ', () => {
    const {getByText} = render(<Controls closed={true} locked={true}/>)
    const lockButton = getByText(/Open Gate/);
    expect(lockButton.disabled).toBeTruthy();
})

test('tests that open button is disabled if gate is locked ', () => {
    const {getByText} = render(<Controls closed={false} locked={false}/>)
    const lockButton = getByText(/Close Gate/);
    expect(lockButton.disabled).toBe(false);
})