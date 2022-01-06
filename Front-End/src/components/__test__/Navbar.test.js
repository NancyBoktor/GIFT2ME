import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

describe('Navbar', () => {
  test('should render navbar component without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
  })
  test.skip('should logout when logout button is clicked', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
  })
})
