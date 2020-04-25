import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {render} from '@testing-library/react'
import Home from 'pages/Home'

test('renders all five banners', () => {
  const {getByText} = render(<Router><Home /></Router>)

  const banners = ['Hats', 'Jackets', 'Sneakers', 'Women', 'Men']
  for (const banner of banners) {
    expect(getByText(banner)).toBeInTheDocument()
  }
})
