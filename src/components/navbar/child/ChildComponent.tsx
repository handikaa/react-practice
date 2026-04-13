type ChildProps = {
  message: string;
  onChangeText: () => void;
};

const ChildComponent = ({ message, onChangeText }: ChildProps) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg mt-4">
      <p className="text-white">Pesan dari Parent: {message}</p>

      <button onClick={onChangeText} className="mt-2 bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded text-white">
        Ubah dari Child
      </button>
    </div>
  );
};

export default ChildComponent;
