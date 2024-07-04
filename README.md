# ✨ [12주차] React 플러스주차 개인과제

##### 주제: NextJS 를 이용해 나만의 포켓몬 도감을 만들어 보기

### 🔗 링크

[포켓몬 도감](https://week12-pokemon.vercel.app/)

### ⏰ 기한

- 2024.07.01 ~ 2024.07.05

### ⚙️ 기술 스택

<p>
  <img alt="Nextjs" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=flat-square&logo=VITE&logoColor=white"/>
  <img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=flat-square&logo=TYPESCRIPT&logoColor=white"/>
  <img alt="Axios" src ="https://img.shields.io/badge/Axios-5A29E4.svg?&style=flat-square&logo=AXIOS&logoColor=white"/>
  <img alt="Tailwind" src ="https://img.shields.io/badge/TailwindCSS-646CFF.svg?&style=flat-square&logo=TAILWINDCSS&logoColor=white"/>
</p>

### 📁 파일 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜api.ts
 ┣ 📂app
 ┃ ┣ 📂(providers)
 ┃ ┃ ┣ 📂(root)
 ┃ ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┃ ┣ 📜Chip.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PokemonCard.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PokemonCardSkeleton.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PokemonDetail.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PokemonDetailCard.tsx
 ┃ ┃ ┃ ┃ ┣ 📜PokemonDetailCardSkeleton.tsx
 ┃ ┃ ┃ ┃ ┗ 📜PokemonList.tsx
 ┃ ┃ ┃ ┣ 📂pokemons
 ┃ ┃ ┃ ┃ ┗ 📂[pokemonId]
 ┃ ┃ ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜layout.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂pokemons
 ┃ ┃ ┃ ┣ 📂[pokemonId]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜layout.tsx
 ┣ 📂components
 ┃ ┗ 📂Page
 ┃ ┃ ┗ 📜Page.tsx
 ┗ 📂types
 ┃ ┗ 📜pokemon.d.ts
```

### 🎇 필수 구현 사항

- ✅ App router 기반, typescript 사용, tailwindcss 사용을 베이스로 한 Nextjs 14 버전으로 프로젝트를 구성
- ✅ Layout 에서 Title, description 에 대한 Metadata 를 설정하고, 어플리케이션 전체에 적용될 UI 를 구현
- ✅ 151번까지의 포켓몬 리스트를 보여주는 페이지를 구현
  - root 페이지에서 보여줘도 무방
  - 클라이언트 컴포넌트로 작성 `"use client"`
  - 포켓몬 리스트 페이지에서 직접적으로 관련 api 를 호출하는 것이 아닌, nextjs api 폴더 내에서 해당 로직에 대한 api 를 구현
- ✅ 특정 포켓몬의 디테일을 보여주는 페이지를 구현
  - 다이나믹 페이지로 구성
  - 특정 포켓몬 디테일에 대한 정보를 가져오는 로직을 nextjs api handler 를 통해서 구현
  - 서버 컴포넌트로 작성
  - 포켓몬 리스트와 디테일 페이지를 서로 이동할 수 있는 기능
- ✅ Nextjs 가 제공하는 `Image`를 사용하여 포켓몬 이미지 표시
- ✅ 포켓몬 데이터에 대한 타입, 컴포넌트들의 props 에 대한 타입 등 어플리케이션 전체에 적절한 타입이 명시되어야 합니다.

### 🎆 선택 구현 사항

- ✅ `Tanstack` 적용
- ✅ 각 페이지 마다 metadata 설정
- ✅ `axios`에 대한 적절한 타입 지정
- ✅ 무한스크롤 혹은 페이지네이션 구현
- ⬛ `Supabase`에 데이터 저장

### 💡 과제 후 숙련 가능 사항

- ✅ NextJS 의 라우팅 방식에 대한 이해
- ✅ NextJS 렌더링 방식에 대한 기본적인 이해와 활용
- ✅ 서버 컴포넌트와 클라이언트 컴포넌트의 이해와 활용
- ✅ Router Handler 에 대한 이해와 활용
- ✅ Tailwindcss 에 대한 설정과 사용방법
