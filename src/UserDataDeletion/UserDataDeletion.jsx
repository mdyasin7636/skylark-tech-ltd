const UserDataDeletion = () => {
  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Data Deletion Policy
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          If you wish to delete any personal information you have provided to
          us, please contact us via email at:
        </p>

        <p className="text-lg text-blue-600 hover:underline mb-4">
          <a href="mailto:skylarkitltd@gmail.com">skylarkitltd@gmail.com</a>
        </p>

        <p className="text-lg text-gray-700 mb-4">
          We will process your request and remove your data from our systems
          within 30 days, unless we are required by law to retain it.
        </p>

        <p className="text-lg text-gray-700">
          For any questions or concerns regarding data deletion, you can reach
          out to us via:
        </p>

        <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
          <li>
            Email:{" "}
            <a
              href="mailto:skylarkitltd@gmail.com"
              className="text-blue-600 hover:underline"
            >
              skylarkitltd@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +8801676047350
            </a>
          </li>
        </ul>

        <p className="text-lg text-gray-700 mt-4">
          We are committed to ensuring the safety and security of your data. If
          you have any further concerns, please do not hesitate to contact us.
        </p>
      </div>
    </section>
  );
};

export default UserDataDeletion;
