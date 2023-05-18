# fe-sprint-coz-shopping

## 개요

메인 페이지, 상품리스트 페이지, 북마크 페이지로 이루어진 SPA앱입니다.
서버로부터 상품 데이터를 받아서 화면에 나타내고, 상품 타입별로 필터하는 기능과 무한스크롤 기능, 북마크 기능이 있습니다. 사용자가 북마크한 목록을 조회할 수 있습니다.

### 프로젝트 목적

프로젝트 요구사항 명세서를 분석하고 5일동안 구현합니다.
애자일 스크럼 방법으로 프로젝트를 관리하고 깃 사용하는 방법을 연습합니다.

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

<br>

## 실행 화면 
### 메인 페이지
![화면 기록 2023-05-18 오후 11 47 31](https://github.com/hahagarden/fe-sprint-coz-shopping/assets/88613455/d26816f2-504d-4a9a-97ed-a727fc242a4b)

### 상품리스트 페이지
![화면 기록 2023-05-18 오후 11 48 51](https://github.com/hahagarden/fe-sprint-coz-shopping/assets/88613455/435c6f0b-0445-4dd3-ace9-c689f1e20174)

### 북마크 페이지
![화면 기록 2023-05-18 오후 11 49 16](https://github.com/hahagarden/fe-sprint-coz-shopping/assets/88613455/6c1e6864-6134-4c7e-8a8f-05a590da18ef)
