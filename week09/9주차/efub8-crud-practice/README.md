# EFUB 8주차 과제 - CRUD 게시판 만들기

> ⚠️ `answer` 브랜치 pr 배너 뜨는건 신경쓰지 마세요

## 📌 과제 목표
API 명세서를 보고 게시판의 CRUD 기능을 완성해보세요!

## 🚀 시작하기

```bash
# 1. 이 레포 클론
git clone https://github.com/pororori/efub8-crud-practice.git
 
# 2. 패키지 설치
yarn
 
# 3. 개발 서버 실행
yarn dev
```

## 📋 API 명세서
스웨거: [https://efub6-seminar-front.p-e.kr/swagger-ui/index.html](https://efub6-seminar-front.p-e.kr/swagger-ui/index.html)

| Method | URL | 설명 |
|--------|-----|------|
| GET | /api/posts | 게시글 목록 조회 |
| GET | /api/posts/{id} | 게시글 단건 조회 |
| POST | /api/posts | 게시글 작성 |
| PATCH | /api/posts/{id} | 게시글 수정 |
| DELETE | /api/posts/{id} | 게시글 삭제 |

## ✏️ TODO 목록
`// TODO` 주석을 찾아서 순서대로 완성해보세요!

| TODO | 파일 | 내용 |
|------|------|------|
| TODO 1 | `src/api/postApi.js` | 게시글 목록 조회 함수 |
| TODO 2 | `src/api/postApi.js` | 게시글 단건 조회 함수 |
| TODO 3 | `src/api/postApi.js` | 게시글 작성 함수 |
| TODO 4 | `src/api/postApi.js` | 게시글 수정 함수 |
| TODO 5 | `src/api/postApi.js` | 게시글 삭제 함수 |
| TODO 6 | `src/pages/HomePage.jsx` | 목록 불러오기 (useEffect) |
| TODO 7 | `src/pages/HomePage.jsx` | 삭제 핸들러 |
| TODO 8 | `src/pages/HomePage.jsx` | 게시글 목록 렌더링 |
| TODO 9 | `src/pages/DetailPage.jsx` | 단건 조회 (useEffect) |
| TODO 10 | `src/pages/DetailPage.jsx` | 삭제 핸들러 |
| TODO 11 | `src/pages/CreatePage.jsx` | 작성 핸들러 |
| TODO 12 | `src/pages/EditPage.jsx` | 기존 데이터 불러오기 |
| TODO 13 | `src/pages/EditPage.jsx` | 수정 핸들러 |

## 📁 폴더 구조
```
src/
├── api/
│   └── postApi.js       # axios 인스턴스 + API 함수 (TODO 1~5)
├── pages/
│   ├── HomePage.jsx     # 게시글 목록 페이지 (TODO 6~8)
│   ├── DetailPage.jsx   # 게시글 상세 페이지 (TODO 9~10)
│   ├── CreatePage.jsx   # 게시글 작성 페이지 (TODO 11)
│   └── EditPage.jsx     # 게시글 수정 페이지 (TODO 12~13)
├── styles/
│   └── GlobalStyle.js
└── App.jsx
```

## ✨ 과제 제출
- styled-components로 나만의 스타일로 꾸며주세요!
- 완성 후 Vercel 등으로 배포해주세요.
- 완성된 코드를 본인 과제 제출 레포(fork) 의 `week08` 폴더에 넣어주세요.
- https://github.com/EFUB/efub6-frontend-assignment-1 으로 PR을 보내주세요.
- PR에 아래 내용을 포함해주세요:
  - 결과물 소개
  - 배포 URL
