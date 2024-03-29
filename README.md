## 시작하는 법

0. vscode 또는 cmd로 my-app 폴더에 들어간 다음 아래의 명령어를 실행합니다.

```bash
#의존성 설치 (필수)
npm install

# 이후 1 or 2 번으로 진행하시면 됩니다.

#1번 방법
npm run build
npm run start

#2번 방법
npm run dev
```

상품목록화면 : http://localhost:3000/products (루트로 접속시 리다이렉트)

장바구니 : http://localhost:3000/cart

## 실행 환경

리액트 버전 : 18.2.0

nextjs 버전: 13.4.4

typescript 버전 : 5.1.3

emotion 버전 : 11.11.0

## 요구사항 관련 공유 사항

1. 상품 목록페이지는 score 기준으로 내림차순 되어있으며, 한줄에 2개씩 보여주고 있습니다. (왼쪽 -> 오른쪽)

2. 장바구니 담기 빼기 버튼은, 아이콘으로 구현 했습니다.

3. 전체 금액이 음수인경우 최종결제 금액은 0 입니다. (만원이하 제품에 만원쿠폰을 사용했을때)

4. 쿠폰은 항상 선택가능하나 (장바구니 목록과 분리되어 있어, 미리 선택 가능하게끔), 쿠폰 불가 상품만 선택되었을때 or 아무것도 선택하지 않았을때는 쿠폰금액은 항상 0 입니다.

## 폴더 구조

my-app

┣ components

    ┣ ui

┣ data

┣ model

┣ pages

    ┣ api
    ┣ cart
    ┣ products

┣ store

components : 리스트 요소로서 사용되거나, 분할해서 따로 빼놓은 컴포넌트들

ui : 모달창, 셀렉트 창

data : 제공받은 데이터

model : 사용되는 객체 interface, type

pages : 화면 (경로대로 분류 되어있습니다. (products, cart, api: 데이터 호출))

store : context들이 있습니다.
