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
 ┣ assets # 이미지 파일 폴더
 ┃ ┣ coz_logo.png
 ┃ ┣ filter_all.png
 ┃ ┣ filter_brand.png
 ┃ ┣ filter_category.png
 ┃ ┣ filter_exhibition.png
 ┃ ┗ filter_product.png
 ┣ components # 컴포넌트 폴더
 ┃ ┣ Bookmark.js
 ┃ ┣ Filter.js
 ┃ ┣ FilterList.js
 ┃ ┣ Footer.js
 ┃ ┣ Header.js
 ┃ ┣ MainProductList.js
 ┃ ┣ Menu.js
 ┃ ┣ Product.js
 ┃ ┣ ProductList.js
 ┃ ┗ ProductModal.js
 ┣ pages # 라우팅 페이지 폴더
 ┃ ┣ template # 페이지에 공통으로 사용되는 템플릿 폴더
 ┃ ┃ ┗ SubPageTemplate.js
 ┃ ┣ BookmarkPage.js
 ┃ ┣ MainPage.js
 ┃ ┗ ProductPage.js
 ┣ redux # 리덕스 상태 관련 폴더
 ┃ ┣ bookmarkListSlice.js
 ┃ ┣ modalDataSlice.js
 ┃ ┣ productListSlice.js
 ┃ ┗ store.js
 ┣ utils # 유틸리티 관련 폴더
 ┃ ┣ enum.js
 ┃ ┗ func.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js
```

<br>

## 주요 기능

### 북마크 기능(로컬스토리지)

앱 구동시 브라우저db 로컬스토리지에 저장된 북마크 리스트를 Redux Toolkit store에 상태로 저장합니다.  
북마크를 추가/해제시 북마크 정보를 브라우저db 로컬스토리지에 업데이트하고 상태도 변경합니다.  
처음에는 redux-persist라이브러리로 간편하게 로컬스토리지와 연동했는데, 외부 라이브러리를 이용하지 않아도 로컬스토리지를 자바스크립트로 쉽게 구현할 수 있어서 라이브러리를 뺐습니다.

### 필터 기능

상품리스트 페이지/북마크 페이지에 전체, 상품, 카테고리, 기획전, 브랜드별로 상품을 모아서 볼 수 있는 필터 기능이 있습니다.  
특히 북마크 페이지에서 북마크 정보를 변경하면 페이지가 리렌더링되는데, 북마크 정보만 업데이트하고 필터된 페이지는 유지하기 위해 현재 선택된 필터 정보를 상태로 유지시킵니다. 상품의 type이 currentFilter상태와 같은 상품에 대한 리스트만 렌더링되도록 했습니다.
currentFilter상태를 이용해서 클릭된 필터는 활성화 표시가 되도록 스타일링하였습니다.

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

<br>

## 마주친 문제

### useSelector와 useState와 useEffect의 관계

상품리스트 페이지/북마크 페이지를 렌더링할 때, useSelector로 전역상태에 저장되어있는 전체 리스트인 productList/bookmarkList(이하 baseList)를 가져옵니다.  
SubPageTemplate컴포넌트에서 사용하는 지역상태인 filteredList와 currentList는 이 baseList를 연산하여 얻어지는데, 지역상태는 useState를 사용하고 전역상태는 useSelector를 사용합니다. useState는 렌더링 전에 실행되고 useSelector는 렌더링 후에 실행되어 순서가 거꾸로였습니다.  
때문에 useEffect(..., [baseList])를 사용했습니다.
그런데 filteredList를 업데이트하고 후에 currentList를 업데이트하는, 상태를 동기적으로 업데이트하기 위해서 useEffect를 총 4번 사용해야 했고 이는 컴포넌트가 8,9번씩 리렌더링되는 문제를 발생시켰습니다.

한편, currentList는 매번 바뀌는 값이라서 상태로 저장할 필요가 없었는데 무의식적으로 useState를 사용하여 상태로 관리하고 있었습니다.

useEffect를 줄이기 위해 filteredList와 currentList를 상태에서 제거하고, filteredList는 무한스크롤 시 유지되어야 해서 useMemo를 사용했습니다.

### addEventListener의 콜백에서 상태 사용하기

무한스크롤 기능에서 스크롤 끝을 감지하는 isEnd상태와 useEffect를 사용하기 때문에 앞선 문제로 useEffect를 줄이기 위해 상태를 제거하였습니다.  
그런데 이 과정에서 addEventListener의 콜백함수인 handleScroll에서 상태갱신함수 setCurrentIndex(currentIndex + DATA_PER_PAGE)를 호출하면 제대로 동작하지 않았습니다. handleScroll함수를 호출할 때마다 currentIndex는 항상 초기값인 30이었습니다.  
이는 addEventListener에 콜백함수를 등록할 때, 그때의 state값들로 상태가 고정되기 때문이었습니다.

setCurrentIndex(prev=>prev+DATA_PER_PAGE)로 함수형 업데이트를 함으로써 기능을 완성했습니다.

<br>

## 개선사항

- 북마크 추가/해제시 토스트 알람 기능 추가하기
