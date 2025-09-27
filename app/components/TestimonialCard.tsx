interface TestimonialCardProps {
  image: string;
  name: string;
  quote: string;
  title: string;
  isMiddle?: boolean;
}

export default function TestimonialCard({
  image,
  name,
  quote,
  title,
  isMiddle,
}: TestimonialCardProps) {
  return (
    <div
      className={`text-center p-8 rounded-2xl ${
        isMiddle ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-6"
      />
      <p className="text-gray-700 mb-6 font-inter">"{quote}"</p>
      <h4 className="font-bold text-gray-900 font-inter">{name}</h4>
      <p className="text-gray-600 text-sm font-inter">{title}</p>
    </div>
  );
}
