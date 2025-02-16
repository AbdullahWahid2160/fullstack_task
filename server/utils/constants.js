// Sample data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Alice Smith", email: "alice@example.com" },
  { id: 4, name: "Bob Johnson", email: "bob@example.com" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 6, name: "Diana Prince", email: "diana@example.com" },
  { id: 7, name: "Evan Wright", email: "evan@example.com" },
  { id: 8, name: "Fiona Green", email: "fiona@example.com" },
  { id: 9, name: "George Harris", email: "george@example.com" },
  { id: 10, name: "Hannah Clark", email: "hannah@example.com" },
];

const posts = [
  { id: 1, userId: 1, title: "Post 1", body: "This is post 1 by John Doe" },
  { id: 2, userId: 1, title: "Post 2", body: "This is post 2 by John Doe" },
  { id: 3, userId: 2, title: "Post 3", body: "This is post 1 by Jane Doe" },
  { id: 4, userId: 2, title: "Post 4", body: "This is post 2 by Jane Doe" },
  { id: 5, userId: 3, title: "Post 5", body: "This is post 1 by Alice Smith" },
  { id: 6, userId: 3, title: "Post 6", body: "This is post 2 by Alice Smith" },
  { id: 7, userId: 4, title: "Post 7", body: "This is post 1 by Bob Johnson" },
  { id: 8, userId: 4, title: "Post 8", body: "This is post 2 by Bob Johnson" },
  {
    id: 9,
    userId: 5,
    title: "Post 9",
    body: "This is post 1 by Charlie Brown",
  },
  {
    id: 10,
    userId: 5,
    title: "Post 10",
    body: "This is post 2 by Charlie Brown",
  },
];

module.exports = { users, posts };
