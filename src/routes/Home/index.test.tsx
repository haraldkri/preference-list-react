import React from 'react';
import {render, screen} from '@testing-library/react';
import HomeRoute from './';

test('renders learn react link', () => {
    render(<HomeRoute/>);
    const linkElement = screen.getByText(/Created by/i);
    expect(linkElement).toBeInTheDocument();
});
