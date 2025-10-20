const CancellationPolicy = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Cancellation policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside space-y-2">
      <li>Follow the house rules</li>
      <li>Treat your Host's home like your own</li>
      <li>Keep noise to a minimum after 10 PM</li>
      <li>No smoking inside the property</li>
      <li>No parties or events allowed</li>
      <li>Report any damages immediately</li>
    </ul>
  </div>
);

export default CancellationPolicy;
