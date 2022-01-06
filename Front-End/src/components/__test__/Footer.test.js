import { BrowserRouter } from 'react-router-dom'
import { cleanup, render } from '@testing-library/react'
// import "@testing-library/jest-dom/extend-expect" <-optional
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
    const { getByTestId } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )
    const authors = getByTestId('authors');
    expect(authors.textContent).toBe('Made with ❤️ Maram - Nancy - Shanna');
  })
})
