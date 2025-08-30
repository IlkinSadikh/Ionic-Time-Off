import { render, screen, fireEvent } from '@testing-library/react'
import RequestForm from '../src/components/timeoff/RequestForm'

test('shows errors when required fields missing', () => {
  const onSubmit = () => {}
  render(<RequestForm onSubmit={onSubmit} />)

  const button = screen.getByTestId('submit-request')
  fireEvent.click(button)

  expect(screen.getAllByRole('alert').length).toBeGreaterThan(0)
})
