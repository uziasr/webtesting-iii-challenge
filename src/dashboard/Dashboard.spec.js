// Test away
import React from 'react'
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard'
import { render, fireEvent } from '@testing-library/react';

test('it renders correctly', () => {
    render(<Dashboard />);
  });

  

  it('renders correctly',()=>{
    const tree = renderer
    .create(<Dashboard/>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})
  