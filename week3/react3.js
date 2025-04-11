const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
