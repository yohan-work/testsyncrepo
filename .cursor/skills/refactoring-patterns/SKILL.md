---
name: refactoring-patterns
description: 코드 리팩토링 기법과 패턴을 제공합니다. 코드 구조 개선, 중복 제거, 가독성 향상 시 사용합니다. refactoring-expert 에이전트와 함께 사용하세요.
---

# 리팩토링 패턴 스킬

## 리팩토링 체크리스트

```
리팩토링 진행:
- [ ] 테스트 커버리지 확인
- [ ] 코드 스멜 식별
- [ ] 리팩토링 기법 선택
- [ ] 작은 단위로 적용
- [ ] 각 단계 테스트
```

## 코드 스멜 → 리팩토링 매핑

| 코드 스멜 | 리팩토링 기법 |
|----------|--------------|
| 긴 함수 | Extract Function |
| 중복 코드 | Extract Function, Pull Up |
| 긴 파라미터 | Introduce Parameter Object |
| 복잡한 조건문 | Replace Conditional with Polymorphism |
| 매직 넘버 | Replace Magic Number with Constant |
| 데이터 뭉치 | Extract Class |

## Extract Function

```typescript
// Before
function processOrder(order: Order) {
  // 유효성 검사
  if (!order.items.length) throw new Error('Empty order');
  if (!order.customer) throw new Error('No customer');
  
  // 총액 계산
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }
  // ... 더 많은 코드
}

// After
function processOrder(order: Order) {
  validateOrder(order);
  const total = calculateTotal(order.items);
  // ...
}

function validateOrder(order: Order) {
  if (!order.items.length) throw new Error('Empty order');
  if (!order.customer) throw new Error('No customer');
}

function calculateTotal(items: OrderItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```

## Introduce Parameter Object

```typescript
// Before
function searchUsers(
  name: string,
  email: string,
  minAge: number,
  maxAge: number,
  role: string
) { ... }

// After
interface UserSearchParams {
  name?: string;
  email?: string;
  ageRange?: { min: number; max: number };
  role?: string;
}

function searchUsers(params: UserSearchParams) { ... }
```

## Replace Conditional with Polymorphism

```typescript
// Before
function getPrice(product: Product) {
  switch (product.type) {
    case 'book': return product.basePrice * 0.9;
    case 'electronics': return product.basePrice * 1.1;
    case 'food': return product.basePrice;
  }
}

// After
interface PricingStrategy {
  calculate(basePrice: number): number;
}

const pricingStrategies: Record<string, PricingStrategy> = {
  book: { calculate: (price) => price * 0.9 },
  electronics: { calculate: (price) => price * 1.1 },
  food: { calculate: (price) => price },
};

function getPrice(product: Product) {
  return pricingStrategies[product.type].calculate(product.basePrice);
}
```

## React 컴포넌트 리팩토링

```typescript
// Before: 모놀리식 컴포넌트
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  // 100줄의 로직...
  return (/* 복잡한 JSX */);
}

// After: 분리된 컴포넌트 + Custom Hook
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => { fetchUser(userId).then(setUser); }, [userId]);
  return user;
}

function UserProfile({ userId }: { userId: string }) {
  const user = useUser(userId);
  if (!user) return <Loading />;
  return (
    <div>
      <UserHeader user={user} />
      <UserPosts userId={userId} />
    </div>
  );
}
```

## 사용 예시

```
refactoring-expert 에이전트로 이 함수를 리팩토링해줘
```
