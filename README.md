# fe-sprint-coz-shopping

## 개요

메인 페이지, 상품리스트 페이지, 북마크 페이지로 이루어진 SPA앱입니다.  
서버로부터 상품 데이터를 받아서 화면에 나타내고, 상품 타입별로 필터하는 기능과 무한스크롤 기능, 북마크 기능이 있습니다.  
사용자가 북마크한 목록을 조회할 수 있습니다.

### 프로젝트 목적

- 프로젝트 요구사항 명세서를 분석하고 5일동안 구현합니다.
- 애자일 스크럼 방법으로 프로젝트를 관리하고 깃 사용하는 방법을 연습합니다.

### 기술 스택

![React](https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react)
![ReduxToolkit](https://img.shields.io/badge/reduxtoolkit-764ABC?style=for-the-badge&logo=redux)
![](https://img.shields.io/badge/emotion-C43BAC?style=for-the-badge&logo=OpenJDK")

<br>

## 폴더 구조

```
src
 ┣ components
 ┃ ┣ Bookmark.js
 ┃ ┣ Filter.js
 ┃ ┣ FilterList.js
 ┃ ┣ Footer.js
 ┃ ┣ Header.js
 ┃ ┣ MainProductList.js
 ┃ ┣ Menu.js
 ┃ ┣ Product.js
 ┃ ┣ ProductList.js
 ┃ ┣ ProductModal.js
 ┃ ┗ SubPageTemplate.js
 ┣ pages
 ┃ ┣ BookmarkPage.js
 ┃ ┣ MainPage.js
 ┃ ┗ ProductPage.js
 ┣ redux
 ┃ ┣ bookmarkListSlice.js
 ┃ ┣ modalDataSlice.js
 ┃ ┣ productListSlice.js
 ┃ ┗ store.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js
```

## 주요 기능

### 북마크 기능(로컬스토리지)
앱 구동시 브라우저db 로컬스토리지에 저장된 북마크 리스트를 Redux Toolkit store에 상태로 저장합니다.  
북마크를 추가/해제시 북마크 정보를 브라우저db 로컬스토리지에 업데이트하고 상태도 변경합니다.  
처음에는 redux-persist라이브러리로 간편하게 로컬스토리지와 연동했는데, 외부 라이브러리를 이용하지 않아도 로컬스토리지를 자바스크립트로 쉽게 구현할 수 있어서 라이브러리를 뺐습니다.

### 필터 기능(로컬스토리지)
상품리스트 페이지/북마크 페이지에 전체, 상품, 카테고리, 기획전, 브랜드별로 상품을 모아서 볼 수 있는 필터 기능이 있습니다.  
특히 북마크 페이지에서 북마크 정보를 변경하면 페이지가 리렌더링되는데, 북마크 정보만 업데이트하고 페이지는 유지시키기 위해 현재 선택된 필터 정보를 로컬스토리지에 저장해서 해당 필터에 대한 리스트만 렌더링되도록 했습니다.

### 무한스크롤(자바스크립트 스크롤 이벤트)
자바스크립트의 스크롤 이벤트로 사용자가 스크롤하는 위치가 현재 페이지 height 이상인지 감지하여 이상이면 데이터를 추가하여 불러오도록 했습니다.  
이번 프로젝트에서는 api에서 데이터 100개를 한꺼번에 받아와서 사용하기 때문에 전체를 redux 상태에 저장하고, 현재 필터된 리스트를 slice하여 스크롤마다 30개씩 화면에 추가되도록 함으로써 무한스크롤을 구현했습니다.

### 모달창
처음에는 상품마다의 모달창이라서 상품 컴포넌트의 자식으로 모달 컴포넌트를 포함시켰는데, 북마크 페이지에서 문제가 있었습니다.  
북마크 페이지도 북마크된 '상품 컴포넌트'를 렌더링하는 것인데, 북마크 해제시 북마크 리스트에서 해당 요소가 아예 삭제되는 것이기 때문에 해당 상품 컴포넌트가 DOM에서 사라지는 것이고, 그렇기 때문에 모달창도 사라졌습니다.  
모달창도 페이지처럼 별도의 layor이기 때문에 App컴포넌트의 자식으로 옮김으로써 해결했습니다.

<br>

## 실행 화면 
### 메인 페이지
![화면 기록 2023-05-18 오후 11 47 31](https://github.com/hahagarden/fe-sprint-coz-shopping/assets/88613455/d26816f2-504d-4a9a-97ed-a727fc242a4b)

### 상품리스트 페이지
![화면 기록 2023-05-18 오후 11 48 51](https://github.com/hahagarden/fe-sprint-coz-shopping/assets/88613455/435c6f0b-0445-4dd3-ace9-c689f1e20174)

### 북마크 페이지
![화면 기록 2023-05-18 오후 11 49 16](https://github.com/hahagarden/fe-sprint-coz-shopping/assets/88613455/6c1e6864-6134-4c7e-8a8f-05a590da18ef)

## 개선사항
- 북마크 추가/해제시 토스트 알람 기능 추가하기
- 리팩토링(상품리스트 페이지/북마크 페이지 useEffetc 줄이기)
