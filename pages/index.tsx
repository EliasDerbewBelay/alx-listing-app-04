// pages/index.tsx
import React, { useState, useEffect } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import axios from "axios";

const Home: React.FC = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {properties.map((property: any) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Home;
