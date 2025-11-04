import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailCardProps {
  property: PropertyProps;
}

const PropertyDetailCard: React.FC<PropertyDetailCardProps> = ({
  property,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden mt-6">
      {/* Image */}
      <div className="relative w-full h-72">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h1 className="text-2xl font-semibold">{property.name}</h1>

        <p className="text-gray-600 text-sm">
          {property.address.city}, {property.address.state},{" "}
          {property.address.country}
        </p>

        {/* Rating */}
        <p className="text-yellow-500 font-medium">
          ⭐ {property.rating.toFixed(1)} / 5
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {property.category.map((item, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Price & Discount */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">${property.price}/night</span>
          {property.discount && (
            <span className="text-sm text-green-600 font-medium">
              {property.discount} OFF
            </span>
          )}
        </div>

        {/* Offers */}
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mt-4">
          <div className="border p-3 rounded text-center">
            <p className="font-semibold">{property.offers.bed}</p>
            <p>Beds</p>
          </div>
          <div className="border p-3 rounded text-center">
            <p className="font-semibold">{property.offers.shower}</p>
            <p>Showers</p>
          </div>
          <div className="border p-3 rounded text-center">
            <p className="font-semibold">{property.offers.occupants}</p>
            <p>Occupants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailCard;
