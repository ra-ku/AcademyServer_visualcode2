# ESLint & Prettier 테스트 가이드

## 📁 파일 구조

```
프로젝트/
├── eslint.config.js      # ESLint 9 설정 파일
├── .prettierrc.js        # Prettier 설정 파일
├── package.json          # npm 스크립트 포함
├── bad-example.js        # 문제가 있는 코드 (테스트용)
└── good-example.js       # 올바른 코드 (참고용)
```

## 🚀 사용 방법

### 1. 패키지 설치 (이미 완료)
```bash
npm install
```

### 2. ESLint로 코드 검사
```bash
# 모든 파일 검사
npm run lint

# 특정 파일만 검사
npx eslint bad-example.js
```

### 3. ESLint로 자동 수정
```bash
# 모든 파일 자동 수정
npm run lint:fix

# 특정 파일만 자동 수정
npx eslint bad-example.js --fix
```

### 4. Prettier로 포맷팅
```bash
# 모든 파일 포맷팅
npm run format

# 특정 파일만 포맷팅
npx prettier --write bad-example.js

# 포맷팅 체크만 (수정하지 않음)
npm run format:check
```

## 🧪 테스트 순서

### Step 1: 나쁜 코드 검사
```bash
npx eslint bad-example.js
```
여러 에러가 표시됩니다!

### Step 2: 자동 수정
```bash
npx eslint bad-example.js --fix
```
많은 문제가 자동으로 수정됩니다!

### Step 3: Prettier로 포맷팅
```bash
npx prettier --write bad-example.js
```
코드가 깔끔하게 정리됩니다!

### Step 4: 최종 검사
```bash
npx eslint bad-example.js
```
이제 에러가 없어야 합니다! (unusedVariable 에러는 남을 수 있음)

## 📝 설정 파일 설명

### eslint.config.js (ESLint 9 Flat Config)
- ESLint 9부터는 `.eslintrc` 대신 `eslint.config.js` 사용
- Prettier와 통합 설정
- Node.js 환경 설정

### .prettierrc.js
- 홑따옴표 사용 (singleQuote: true)
- 세미콜론 필수 (semi: true)
- 들여쓰기 2칸 (tabWidth: 2)
- trailing comma ES5 스타일

## 🎯 주요 규칙

### ESLint가 잡는 것:
- ✅ 사용하지 않는 변수
- ✅ 정의되지 않은 변수 사용
- ✅ 코드 품질 문제

### Prettier가 잡는 것:
- ✅ 들여쓰기
- ✅ 따옴표 스타일 (쌍따옴표 → 홑따옴표)
- ✅ 세미콜론 추가/제거
- ✅ 공백 정리
- ✅ 줄 길이 조정

## 💡 팁

1. **VSCode 사용자**: ESLint와 Prettier 확장 프로그램 설치
2. **저장 시 자동 수정**: VSCode 설정에서 "Format On Save" 활성화
3. **Git Hook**: husky + lint-staged로 커밋 전 자동 검사 가능
