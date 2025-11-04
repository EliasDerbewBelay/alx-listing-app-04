import { NextApiRequest, NextApiResponse } from "next";

// Mock review data
const mockReviews = [
  {
    id: 1,
    propertyId: "1",
    user: "John Doe",
    rating: 5,
    comment: "Amazing place! Highly recommended.",
    date: "2024-01-12",
  },
  {
    id: 2,
    propertyId: "1",
    user: "Sarah Smith",
    rating: 4,
    comment: "Great location, clean rooms. Will come back!",
    date: "2024-01-15",
  },
  {
    id: 3,
    propertyId: "2",
    user: "Michael Brown",
    rating: 5,
    comment: "Perfect mountain retreat. Loved the cozy vibes!",
    date: "2024-01-20",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // propertyId

  if (req.method === "GET") {
    const propertyReviews = mockReviews.filter(
      (review) => review.propertyId === id
    );

    return res.status(200).json(propertyReviews);
  }

  return res.status(405).json({ message: "Method not allowed" });
}