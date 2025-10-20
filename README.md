# ALX Listing App - Booking Detail Page

A responsive booking detail page built with Next.js, TypeScript, and Tailwind CSS that allows users to enter contact information, payment details, and review their booking summary.

## Features

- **Contact Details Form**: Collects user's first name, last name, email, and phone number
- **Payment Information**: Secure payment form with card details
- **Billing Address**: Complete billing address collection
- **Order Summary**: Displays booking details, fees, and grand total
- **Cancellation Policy**: Clear cancellation terms and conditions
- **Ground Rules**: House rules for guests

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Components**: React functional components

## Project Structure
alx-listing-app-03/
├── components/
│ └── booking/
│ ├── BookingForm.tsx
│ ├── OrderSummary.tsx
│ └── CancellationPolicy.tsx
├── pages/
│ └── booking/
│ └── index.tsx
└── README.md

text

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser
5. Navigate to `/booking` to view the booking page

## Components

### BookingForm
- Contact information inputs
- Payment details form
- Billing address fields
- Confirm & Pay button

### OrderSummary
- Property details and image
- Stay information
- Price breakdown
- Grand total calculation

### CancellationPolicy
- Cancellation policy text
- Ground rules list

## Responsive Design

The page is fully responsive and adapts to different screen sizes:
- Mobile: Single column layout
- Desktop: Two-column layout with form on left and summary on right
