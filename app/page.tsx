export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center">더미 타이틀</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            더미 데이터더미 데이터더미 데이터더미 데이터더미 데이터더미 데이터
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            더미 버튼
          </button>
        </div>
      </div>
    </div>
  );
}