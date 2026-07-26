export type Rsvp = 'yes' | 'no' | 'pending'

export type Guest = {
  id: string
  name: string
  category: 'Day' | 'Evening' | 'Ceremony only'
  rsvp: Rsvp
  plusOneAllowed: boolean
  plusOneName?: string
  meal?: string
  table?: string
}

export const GUESTS: Guest[] = [
  { id: 'g1', name: 'Marie Fletcher', category: 'Day', rsvp: 'yes', plusOneAllowed: true, plusOneName: 'Alan Fletcher', meal: 'Chicken', table: 'Top table' },
  { id: 'g2', name: 'Tom Reilly', category: 'Day', rsvp: 'yes', plusOneAllowed: true, plusOneName: 'Zoe Reilly', meal: 'Fish', table: 'Table 1' },
  { id: 'g3', name: 'Chris Bannerman', category: 'Day', rsvp: 'pending', plusOneAllowed: false },
  { id: 'g4', name: 'Priya Nair', category: 'Day', rsvp: 'yes', plusOneAllowed: false, meal: 'Vegetarian', table: 'Table 1' },
  { id: 'g5', name: 'Sam Whitlock', category: 'Evening', rsvp: 'yes', plusOneAllowed: true, plusOneName: 'Jess Adeyemi' },
  { id: 'g6', name: 'Hannah Okafor', category: 'Day', rsvp: 'no', plusOneAllowed: true },
  { id: 'g7', name: 'Daniel Cross', category: 'Evening', rsvp: 'pending', plusOneAllowed: false },
  { id: 'g8', name: 'Aisha Rahman', category: 'Day', rsvp: 'yes', plusOneAllowed: false, meal: 'Vegan', table: 'Table 2' },
  { id: 'g9', name: 'Greg Sandeman', category: 'Ceremony only', rsvp: 'yes', plusOneAllowed: false, table: 'Table 2' },
  { id: 'g10', name: 'Lucia Moretti', category: 'Day', rsvp: 'pending', plusOneAllowed: true },
  { id: 'g11', name: 'Ben Harlow', category: 'Evening', rsvp: 'yes', plusOneAllowed: false },
  { id: 'g12', name: 'Nina Kaur', category: 'Day', rsvp: 'yes', plusOneAllowed: true, plusOneName: 'Raj Kaur', meal: 'Chicken', table: 'Table 3' },
]

export const CHECKLIST = [
  { id: 'c1', task: 'Set the date', group: 'Foundations', done: true },
  { id: 'c2', task: 'Book the venue', group: 'Venue', done: true },
  { id: 'c3', task: 'Draft the guest list', group: 'Guests', done: true },
  { id: 'c4', task: 'Send save the dates', group: 'Guests', done: true },
  { id: 'c5', task: 'Book the photographer', group: 'Suppliers', done: true },
  { id: 'c6', task: 'Choose the caterer', group: 'Venue', done: false },
  { id: 'c7', task: 'Order the dress', group: 'Attire', done: false },
  { id: 'c8', task: 'Book the band or DJ', group: 'Suppliers', done: false },
  { id: 'c9', task: 'Order the cake', group: 'Venue', done: false },
  { id: 'c10', task: 'Send the invitations', group: 'Guests', done: false },
  { id: 'c11', task: 'Buy the rings', group: 'Foundations', done: false },
  { id: 'c12', task: 'Confirm the seating plan', group: 'Guests', done: false },
  { id: 'c13', task: 'Final dress fitting', group: 'Attire', done: false },
  { id: 'c14', task: 'Final headcount to caterer', group: 'Venue', done: false },
]

export const BUDGET = [
  { id: 'b1', category: 'Venue hire', estimated: 6500, actual: 6800, share: 25 },
  { id: 'b2', category: 'Catering and bar', estimated: 7000, actual: 6420, share: 27 },
  { id: 'b3', category: 'Photography and film', estimated: 2800, actual: 2800, share: 11 },
  { id: 'b4', category: 'Attire and beauty', estimated: 2600, actual: 3150, share: 10 },
  { id: 'b5', category: 'Flowers and styling', estimated: 2200, actual: 1980, share: 8 },
  { id: 'b6', category: 'Music and entertainment', estimated: 1800, actual: 1800, share: 7 },
  { id: 'b7', category: 'Stationery and invitations', estimated: 400, actual: 99, share: 2 },
  { id: 'b8', category: 'Rings', estimated: 1800, actual: 1650, share: 7 },
  { id: 'b9', category: 'Transport and accommodation', estimated: 900, actual: 740, share: 3 },
]

export const TABLES = [
  { id: 't0', name: 'Top table', seats: 8, shape: 'rect' as const },
  { id: 't1', name: 'Table 1', seats: 10, shape: 'round' as const },
  { id: 't2', name: 'Table 2', seats: 10, shape: 'round' as const },
  { id: 't3', name: 'Table 3', seats: 10, shape: 'round' as const },
  { id: 't4', name: 'Table 4', seats: 10, shape: 'round' as const },
]

export const ACTIVE_BLOCKS = [
  'Countdown',
  'Venue and Map',
  'Our Story',
  'Timeline',
  'Dress Code',
  'Gift Registry',
  'FAQ',
]
