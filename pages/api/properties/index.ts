import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: "1",
    name: "Ocean View Apartment",
    address: {
      state: "California",
      city: "Los Angeles",
      country: "USA",
    },
    rating: 4.6,
    category: ["Apartment", "Luxury"],
    price: 120,
    offers: {
      bed: "2 Beds",
      shower: "1 Shower",
      occupants: "4 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1200",
    discount: "10%",
  },
  {
    id: "2",
    name: "Mountain Cabin Retreat",
    address: {
      state: "Colorado",
      city: "Aspen",
      country: "USA",
    },
    rating: 4.9,
    category: ["Cabin", "Nature"],
    price: 150,
    offers: {
      bed: "3 Beds",
      shower: "2 Showers",
      occupants: "6 Guests",
    },
    image: "https://images.unsplash.com/photo-1551888418-7930f7ccf878?w=1200",
    discount: "5%",
  },
  {
    id: "3",
    name: "Bali Beach Villa",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.8,
    category: ["Villa", "Beach"],
    price: 200,
    offers: {
      bed: "4 Beds",
      shower: "3 Showers",
      occupants: "8 Guests",
    },
    image:
      "https://images.unsplash.com/photo-1600047509807-6f7b5843d0d5?w=1200",
    discount: "15%",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if ((req.method = "GET")) {
    return res.status(200).json(properties);
  }

  return res.status(405).json({ message: "Method does not allowed" });
}
