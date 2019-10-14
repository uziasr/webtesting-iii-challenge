// Test away
import React from 'react'
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard'
import { render, fireEvent } from '@testing-library/react';

test('it renders correctly', () => {
    // do snapshots here if you're not in codesandbox
    render(<Dashboard />);
  });
  

it('renders correctly',()=>{
    const tree = renderer
    .create(<Dashboard/>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})