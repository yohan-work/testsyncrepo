---
name: testing-patterns
description: 테스트 작성 패턴과 베스트 프랙티스를 제공합니다. 단위 테스트, 컴포넌트 테스트, E2E 테스트 작성 시 사용합니다. test-engineer 에이전트와 함께 사용하세요.
---

# 테스트 패턴 스킬

## 테스트 유형 선택

| 유형 | 대상 | 도구 |
|------|------|------|
| 단위 | 함수, 유틸리티 | Jest, Vitest |
| 컴포넌트 | React 컴포넌트 | React Testing Library |
| 통합 | API, 서비스 | Jest, Supertest |
| E2E | 전체 흐름 | Playwright, Cypress |

## 단위 테스트 패턴

```typescript
// AAA 패턴: Arrange, Act, Assert
describe('calculateTotal', () => {
  it('should calculate total with discount', () => {
    // Arrange
    const items = [{ price: 100 }, { price: 200 }];
    const discount = 0.1;
    
    // Act
    const result = calculateTotal(items, discount);
    
    // Assert
    expect(result).toBe(270);
  });
  
  it('should return 0 for empty items', () => {
    expect(calculateTotal([], 0)).toBe(0);
  });
});
```

## 컴포넌트 테스트 패턴

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockOnLogin = jest.fn();
  
  beforeEach(() => {
    mockOnLogin.mockClear();
  });
  
  it('should render email and password inputs', () => {
    render(<LoginForm onLogin={mockOnLogin} />);
    
    expect(screen.getByLabelText(/이메일/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/비밀번호/i)).toBeInTheDocument();
  });
  
  it('should call onLogin with credentials', async () => {
    const user = userEvent.setup();
    render(<LoginForm onLogin={mockOnLogin} />);
    
    await user.type(screen.getByLabelText(/이메일/i), 'test@test.com');
    await user.type(screen.getByLabelText(/비밀번호/i), 'password123');
    await user.click(screen.getByRole('button', { name: /로그인/i }));
    
    expect(mockOnLogin).toHaveBeenCalledWith('test@test.com', 'password123');
  });
  
  it('should show error for invalid email', async () => {
    const user = userEvent.setup();
    render(<LoginForm onLogin={mockOnLogin} />);
    
    await user.type(screen.getByLabelText(/이메일/i), 'invalid');
    await user.click(screen.getByRole('button', { name: /로그인/i }));
    
    expect(screen.getByRole('alert')).toHaveTextContent(/올바른 이메일/i);
  });
});
```

## 쿼리 우선순위

```
1. getByRole      - 접근성 기반 (권장)
2. getByLabelText - 폼 요소
3. getByText      - 텍스트 콘텐츠
4. getByTestId    - 최후 수단
```

## 비동기 테스트

```typescript
it('should load data', async () => {
  render(<DataList />);
  
  // 로딩 상태 확인
  expect(screen.getByText(/로딩/i)).toBeInTheDocument();
  
  // 데이터 로드 대기
  await waitFor(() => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
```

## Mock 패턴

```typescript
// API Mock
jest.mock('../api/users', () => ({
  fetchUsers: jest.fn(() => Promise.resolve([{ id: 1, name: 'Test' }])),
}));

// 모듈 Mock
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));
```

## 사용 예시

```
test-engineer 에이전트로 LoginForm 컴포넌트 테스트를 작성해줘
```
