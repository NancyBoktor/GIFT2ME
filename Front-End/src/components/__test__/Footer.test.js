import { BrowserRouter } from 'react-router-dom'
import { cleanup, screen, render } from '@testing-library/react'
import Footer from '../Footer'

afterEach(cleanup)

describe('Footer', () => {
  test('should render footer component without crashing', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )
  })

  test('should render author names on page', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )
    const authors = screen.getByText('Made with ❤️ Maram - Nancy - Shanna')
    expect(authors).toBe('<p>Made with ❤️ Maram - Nancy - Shanna</p>')
  })
})
