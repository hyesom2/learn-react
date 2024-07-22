# 디자인 → 개발 핸드오프 과제 수행

### ※ 수행 조건

테스트는 다음 조건을 충족해야 합니다.

- 모두가 접근 가능
- 의미있는 구조 설계
- 체계적인 표현 설계
- 원할한 상호작용 설계

---

### 피그마 시안

![피그마시안](https://github.com/user-attachments/assets/0a78b8a1-8db3-400e-97fe-7850e86247b1)

- 이름을 list item으로 변경
- list item을 감싸는 group 생성 후 이름을 list로 변경

---

### 1. 마크업

```html
<ul class="list" role="list">
  <li class="list__item" role="listitem" tabindex="0">
    <figure>
      <img src="./images/Architecture.png" alt="History of Architecture" />
      <figcaption>History of Architecture</figcaption>
    </figure>
  </li>
  <li class="list__item" role="listitem" tabindex="0">
    <figure>
      <img src="./images/buildingDesign.png" alt="Building design" />
      <figcaption>Building design</figcaption>
    </figure>
  </li>
  <li class="list__item" role="listitem" tabindex="0">
    <figure>
      <img src="./images/graphics.png" alt="Graphics" />
      <figcaption>Graphics</figcaption>
    </figure>
  </li>
  <li class="list__item" role="listitem" tabindex="0">
    <figure>
      <img src="./images/climatology.png" alt="Climatology" />
      <figcaption>Climatology</figcaption>
    </figure>
  </li>
</ul>
```

- ul로 감싼 후 그 안에 li를 넣어줌
- 클래스명은 list와 그 안의 item인 list__item 이름을 지음
- figure와 figcaption을 쓴 이유는 이미지와 그 이미지에 해당하는 설명이기 때문에 사용
- tabindex는 tab으로 해당 list__item에 접근하도록

---

2. 스타일링

```css
.list {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25rem;
  width: fit-content;
  min-width: 20rem;
  max-width: 37.5rem;
}

.list__item {
  width: 100%;
  background-color: #141415;
  padding: 0.75rem;

  figure {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1.25rem;

    img {
      display: block;
      width: 4rem;
      height: 4rem;
      object-fit: cover;
    }

    figcaption {
      font-size: 1.25rem;
      line-height: 120%;
      color: #fff;
    }
  }

  &:focus {
    outline: 3px solid red;
  }
}
```

---

### ※ 문제발생 !!!

- 글자가 길어질 수도 있기 때문에 min-width와 max-width를 주고 싶은데 둘다 적용을 하면 max-width로 적용이 되었다. <br />
→ list에 width: fit-content를 주었다.
* 글씨가 길어서 max-width일 경우<br />
![max-width](https://github.com/user-attachments/assets/64f94ef1-437d-43e6-95d0-52b1b820802c)
* 평소(글씨가 짧아서) min-width일 경우<br />
![min-width](https://github.com/user-attachments/assets/504d896f-ade9-43da-8393-b828aef7d0ec)

---

### 결과
* border로 하면 list__item들이 들썩거리기 때문에 outline으로 처리하였다.<br />
![결과](https://github.com/user-attachments/assets/cd11d6ad-864f-41e1-baa5-ec622d8afc8b)
