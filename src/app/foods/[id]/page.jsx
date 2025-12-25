import React from "react";


export function generateStaticParams() {
  return [{ id: '52898' }, { id: '52955' }, { id: '52926' }]
}

export async function generateMetadata({params}){
const {id} = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  if (!res.ok) {
    return null;
  }

  const {details = {}} = await res.json();
  return {
    title: details.title,
      generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  }
}

export const metadata={
  title: "Food Details Yatun Khaijan",
  description: "Best Fastfood in Noakhali"
}

const getSingleFoods = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.details;
};

const ViewDetails = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFoods(id);
console.log(food)
  if (!food) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-semibold text-red-500">
          Food not found 😔
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">{food.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div>
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-[350px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-green-600 font-bold">
              ৳ {food.price}
            </span>
          </p>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {food.category}
          </p>

          <p>
            <span className="font-semibold">Area:</span> {food.area}
          </p>

          <p>
            <span className="font-semibold">Food ID:</span> {food.id}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Add to Cart
            </button>

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Watch Recipe
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-xl font-semibold mb-3">Additional Information</h3>

        <ul className="space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Category ID:</span> {food.catId}
          </li>
          <li>
            <span className="font-medium">Cuisine Area:</span> {food.area}
          </li>
          <li>
            <span className="font-medium">Type:</span> {food.category}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewDetails;
