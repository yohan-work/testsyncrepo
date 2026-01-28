```typescript
import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <div>
      <h1>회원가입 화면</h1>
      <input type="text" placeholder="아이디" />
      <input type="text" placeholder="이름" />
      <input type="email" placeholder="이메일" />
      <input type="text" placeholder="주소" />
      <button>회원가입하기</button>
    </div>
  );
}; 

export default SignupPage;```