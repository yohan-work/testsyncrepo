export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center">회원가입</h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">아이디</label>
            <input 
              id="id" 
              type="text"
              placeholder="아이디를 입력하세요..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input 
              id="password" 
              type="password"
              placeholder="비밀번호를 입력하세요..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
            <input 
              id="email" 
              type="email"
              placeholder="이메일 주소를 입력하세요..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">주소</label>
            <input 
              id="address" 
              type="text"
              placeholder="주소를 입력하세요..." 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}