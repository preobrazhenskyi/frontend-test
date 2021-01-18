import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './List';

import { fetchCharacters } from './api';
jest.mock('./api');

const mockCharacters: any[] = [
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "location": {
      "type": "Planet",
      "name": "Earth (Replacement Dimension)"
    }
  },
  {
    "name": "Morty Smith",
    "status": "Alive",
    "location": {
      "type": "Planet",
      "name": "Earth (Replacement Dimension)"
    }
  },
  {
    "name": "Summer Smith",
    "status": "Alive",
    "location": {
      "type": "Planet",
      "name": "Earth (Replacement Dimension)"
    }
  },
  {
    "name": "Beth Smith",
    "status": "Alive",
    "location": {
      "type": "Planet",
      "name": "Earth (Replacement Dimension)"
    }
  },
  {
    "name": "Jerry Smith",
    "status": "Alive",
    "location": {
      "type": "Planet",
      "name": "Earth (Replacement Dimension)"
    }
  },
  {
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "location": {
      "type": "Cluster",
      "name": "Abadango"
    }
  },
  {
    "name": "Abradolf Lincler",
    "status": "unknown",
    "location": {
      "type": "Dimension",
      "name": "Testicle Monster Dimension"
    }
  }
];

beforeEach(() => {
  (fetchCharacters as jest.Mock).mockResolvedValue(mockCharacters)
})

test('renders characters list', async () => {
  render(<List/>);

  const titleElement = screen.getByText("All the charactesrs from Rick and Morty Multiverse");
  expect(titleElement).toBeInTheDocument();

  const items = await screen.findAllByRole('listitem');
  expect(items.length).toBe(mockCharacters.length);

  expect(fetchCharacters).toBeCalledTimes(1);
});

test('renders pagination', async () => {
  render(<List/>);

  const dropdownElement = await screen.findByRole('combobox');
  expect(dropdownElement).toBeInTheDocument();
});

test('renders search input', async () => {
  render(<List/>);

  const searchInput = await screen.findByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});

