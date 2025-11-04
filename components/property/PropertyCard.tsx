import { PropertyCardProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <Image
        src={property.image}
        alt={property.name}
        width={500}
        height={500}
      />
      <h2 className="text-lg font-semibold mt-2">{property.name}</h2>
      <p className="text-sm text-gray-600">
        {property.address?.city}, {property.address?.country}
      </p>
      <p className="text-yellow-500 text-sm">{property.rating}</p>

      <Link
        href={`/porperties/${property.id}`}
        className="text-blue-600 underline text-sm mt-2 inline-block"
      >
        View Detail
      </Link>
    </div>
  );
};

export default PropertyCard;
