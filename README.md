# Ionic Time Off

A lightweight mobile-friendly application built with **Ionic + React** that allows employees to request time off and supervisors to review and approve/reject requests.

## Features

### Employee View

* Submit a time off request with:

  * Start date & end date (supports one-day leave)
  * Time off type (Vacation, Sick, Personal, Other)
  * Optional notes
* View list of past and upcoming requests with status indicators

### Supervisor View

* See all submitted requests
* Approve or reject with optional comments
* Requests update in real time (persisted in localStorage)

### UI / UX

* Mobile-first layout using Ionic components
* Custom status badges (Pending, Approved, Rejected)
* Styled supervisor action buttons
* Accessible form (aria attributes, role="alert" on errors)

### Bonus

* Form validation with clear error messages
* Unit tests (Jest + Testing Library)
* Component previews in Storybook
* Clean separation of helpers (date utilities, validators)

---

## Quick Start

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

### Run tests

```bash
npm test
```

### Run Storybook

```bash
npm run storybook
```

---

## Architecture Decisions

* **Framework**: Ionic + React for mobile-first UI with ready-to-use components.
* **State Management**: React `useState` + context for simplicity. Requests are persisted in `localStorage`.
* **Validation**: Centralized in `validators.ts` with support for required fields, valid date ranges, and same-day leave.
* **Helpers**: Extracted into `lib/` (e.g. `dateUtils.ts`) to keep components clean and DRY.
* **Styling**: Ionic theme variables with light custom CSS classes for buttons and badges.
* **Testing**: Jest + Testing Library for unit and component tests. Focused on form validation and store logic.
* **Storybook**: Showcases `StatusBadge`, `RequestCard`, and supervisor action buttons. Includes controls for interactive testing.
* **Accessibility**: Form controls use `aria-invalid`, `role="alert"`, and accessible labels. Buttons have descriptive labels.

