import React from 'react'
import {render} from '@testing-library/react'
import Banners from 'components/Banners'

test('renders all five banners', () => {
  const {getByText} = render(<Banners />)

  const banners = ['Hats', 'Jackets', 'Sneakers', 'Women', 'Men']
  for (const banner of banners) {
    expect(getByText(banner)).toBeInTheDocument()
  }
})
