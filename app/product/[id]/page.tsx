import { notFound } from 'next/navigation';
import AddToCartButton from '@/app/src/components/product/AddToCartButton';
import { products } from '../../../app/src/data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product:any = products.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  // Default description agar data mein nahi hai
  const description = product.description || `Premium quality ${product.name} from ANAS ALI FASHION.`;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600';
            }}
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-amber-600 mt-4">
            Rs. {product.price.toLocaleString()}
          </p>
          <p className="text-gray-600 mt-4">{description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}