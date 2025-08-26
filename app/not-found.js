import Link from "next/link";

const notFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default notFound;
