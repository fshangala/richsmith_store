export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Rich Smith Food Products. All rights reserved.</p>
      </div>
    </footer>
  );
}