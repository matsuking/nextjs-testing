import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

// itでテストケースを書く
it('Should render hello text', () => {
  render(<Home />)
  // テストするHTMLファイルを呼び出す
  // screen.debug()
  expect(screen.getByText('Welcome to Nextjs')).toBeInTheDocument()
})