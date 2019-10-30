// Test away!
import React from 'react'
import Display from './Display'
import { render, fireEvent } from '@testing-library/react';


test('setLionsScore is called on home button clicks', () => {
    const setLocked = jest.fn();
    const setClosed = jest.fn();
    const { getByText } = render(
      <Display locked={setLocked} closed={setClosed} />
    );
    console.log(getByText)
})

test('Gate is closed', () => {
    const { getByText } = render(<Display closed={true} />);
    (getByText(/closed/i))
  });
  test('Gate is locked', () => {
    const { getByText } = render(<Display locked={true}/>);
    getByText(/locked/i)
  });
  test('Gate is open', () => {
    const { getByText } = render(<Display closed={false}/>);
    getByText(/open/i)
  });
  test('Gate is unlocked', () => {
    const { getByText } = render(<Display locked={false}/>);
    getByText(/unlocked/i)
  });
  
  