'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import InteractionPanel from './components/InteractionPanel';

const BOOK = {
  title: '늙은 기사의 마지막 모험',
  author: '권선우',
  coverImage: '/images/start.webp',
  pages: [
    {
      id: 1, illustration: '/images/1.webp',
      content: `왕국의 사람들은 모두 그를 알고 있었다.
그는 왕국에서 가장 오래된 기사였다.
어린 시절부터 검을 들었고, 늙어서는 왕과 여왕을 지켰다.
왕자가 태어났을 때는 밤새 곁을 지켰고, 공주가 처음 걸음마를 뗐을 때는 혹시 넘어질까 뒤를 따라다녔다.
누군가는 그를 충직하다고 불렀고, 누군가는 우직하다고 불렀다.
하지만 그는 그런 말에 관심이 없었다.
그저 자신의 왕국과 가족을 지키는 것이 행복했다.
그러나 세상은 늘 변한다.
어느 날 왕은 그를 불렀다.
"잠시만 여기서 기다려라."
왕의 목소리는 평소와 같았다.
기사는 고개를 끄덕였다.
왕은 마차에 올라탔고 떠나갔다.
기사는 기다렸다.
하루가 지나고 밤이 찾아왔다.
추위가 찾아왔다.
다음 날 아침이 밝아도 그는 움직이지 않았다.
왕이 기다리라고 했으니까.
둘째 날 저녁이 되었을 때, 기사는 결국 쓰러졌다.`,
    },
    {
      id: 2, illustration: '/images/2.webp',
      content: `눈을 뜨자 낯선 하늘이 보였다.
"정신이 드십니까?"
젊은 용병 하나가 물었다.
그는 낡은 갑옷 대신 거친 털가죽 같은 외투를 몸에 두르고 있었다.
얼굴에는 오래된 상처 자국이 여러 개 남아 있었고, 귀 가장자리는 군데군데 찢어져 있었다.
야영지 주변에는 비슷한 차림의 용병들이 흩어져 누워 있었다.
어떤 이는 몸을 둥글게 말고 잠들어 있었고, 어떤 이는 땅에 코를 가까이 댄 채 주변 냄새를 살피고 있었다.
기사는 몸을 일으키려 했지만 온몸이 무거웠다.
"주군은 어디로 가셨지?"
용병은 잠시 침묵했다.
"당신은 버려진 겁니다."
기사는 웃었다.
"그럴 리 없네."
"현실을 보세요."
"그럴 리 없네."
용병은 한숨을 쉬었다.
"그럼 왜 아무도 안 돌아왔죠?"
기사는 대답하지 못했다.
하지만 떠나기 직전의 모습이 떠올랐다.
마차 창문 너머로 울고 있던 왕자.
그리고 공주.
그 아이들은 울고 있었다.
그렇다면 분명 이유가 있는 것이다.
그는 그렇게 믿었다.
"난 돌아가야 하네."
용병이 미간을 찌푸렸다.
"어디로요?"
"왕국으로."
"어디 있는지는 압니까?"
기사는 잠시 생각했다.
그리고 담담히 말했다.
"느껴진다네."
용병은 황당하다는 듯 웃었다.
"그런 걸로 길을 찾을 수 있습니까?"
"평생 함께 살았으니 알 수 있네."
용병은 몇 시간 동안 그를 설득했다.
그러나 늙은 기사는 묵묵히 들을 뿐 생각을 바꾸지 않았다.
결국 용병이 포기했다.
"내일 아침에 출발하세요."
"고맙네."
"그리고 조심하십시오… 밖은 괴물로 가득합니다."`,
    },
    {
      id: 3, illustration: '/images/3.webp',
      content: `다음 날 새벽.
기사는 길을 떠났다.
그는 왕국이 있는 방향을 모른다.
지도도 없다.
단지 느낌만 있었다.
그러나 이상하게도 그것만으로 충분했다.
얼마나 걸었을까, 멀리서 굉음이 들려왔다.
곧 검은 형체들이 번개처럼 지나갔다.
너무 빨라 형태조차 보이지 않았다.
기사는 식은땀을 흘렸다.
'저것이 괴물인가.'
그것들은 쉼 없이 길 위를 달렸다.
하지만 왕국으로 가려면 반드시 이 길을 지나야 한다.
기사는 이를 악물고 뛰었다.
그 순간, 엄청난 속도의 괴물 하나가 눈앞까지 다가왔다.
기사는 죽음을 직감했다.
하지만 괴물은 갑자기 방향을 틀어 그를 피해갔다.
그리고 안에서 누군가 중얼거렸다.
"불쌍한 놈…"
기사는 그제야 괴물의 모습을 보았다.
그것은 거대한 쇳덩이였다.
네 개의 둥근 발을 쉼 없이 굴리며 길 위를 미끄러지듯 달리고 있었다.
앞쪽에는 투명한 방패가 달려 있었고, 그 안에서는 귀족들이 편안한 의자에 앉아 있었다.
괴물은 뜨거운 숨을 내뿜으며 굉음을 토해냈다.
쇠 냄새와 타는 냄새가 뒤섞인 기묘한 향이 길 위에 남았다.
그것은 귀족들이 타는 화려한 마차였다.
심지어 자신도 타 본 적 있는
자신을 버리고 떠났던 바로 그 마차.`,
    },
    {
      id: 4, illustration: '/images/4.webp',
      content: `기사의 눈앞에 끝이 보이지 않을 만큼 넓은 강이 나타났다.
평생 왕국 안에서만 살아온 그는 이런 강을 본 적이 없었다.
한참 동안 강을 바라보았다.
햇빛이 물 위에서 반짝였다.
이상하게도 조금 아름답다고 생각했다.
하지만 곧 고민이 찾아왔다.
어떻게 건너야 할까.
그는 깊은 물에 들어가 본 적이 거의 없었다.
물은 무서웠다.
저 아래로 가라앉으면 다시는 나오지 못할 것 같았다.
기사는 조심스럽게 발을 내밀었다.
차가운 물이 발끝을 감쌌다.
깜짝 놀라 발을 뺐다.
한참 동안 망설였다.
그러나 결국 다시 앞으로 나아갔다.
왕국으로 가야 했으니까.
물이 다리까지 차올랐다.
배까지 잠겼다.
몸이 무거워졌다.
그리고 마침내 발이 땅에 닿지 않았다.
순간 놀랐다.
몸이 가라앉는 것 같았다.
하지만 이상한 일이 일어났다.
몸이 저절로 움직였다.
손이 물을 밀어냈다.
발도 자연스럽게 움직였다.
누가 가르쳐 준 적도 없는데.
태어나 처음 하는 일인데.
몸은 이미 알고 있었다.
기사는 정신없이 물을 헤쳤다.
얼마나 지났을까.
정신을 차려 보니 강 건너편이었다.
기사는 젖은 몸을 털었다.
그리고 다시 길을 걸었다.
마치 방금 한 일이 특별한 일이 아니라는 듯이.`,
    },
    {
      id: 5, illustration: '/images/5.webp',
      content: `배고픔이 찾아오기 시작했다.
처음에는 참을 만했다.
하지만 시간이 지날수록 견디기 어려워졌다.
그때 무장한 용병들이 나타났다.
그들은 모두 제각기 다른 갑옷을 걸치고 있었지만 어딘가 비슷한 분위기를 풍겼다.
몸에는 오래된 상처가 많았고, 털은 거칠고 엉켜 있었다.
그들 중 몇몇은 낮게 으르렁거리듯 목을 울렸고, 또 다른 이들은 땅을 긁으며 경계심 가득한 눈빛을 보냈다.
그들은 기사를 발견하자마자 무기를 들었다.
"멈춰!"
기사는 손을 들었다.
"싸우고 싶지 않네."
하지만 그들은 듣지 않았다.
마치 전투에 미친 사람들처럼 달려들었다.
기사는 계속 피했다.
계속 말했다.
하지만 소용없었다.
결국 그는 검을 휘둘렀다.
용병들이 쓰러졌다.
전투가 끝났을 때.
기사는 무릎을 꿇었다.
배가 고팠다.
너무 고팠다.
목도 말랐다.
정신이 흐려졌다.
안 된다는 것을 안다.
절대 해서는 안 된다는 것도 안다.
하지만 본능은 이성을 삼켜 버렸다.
그날 밤.
늙은 기사는 처음으로 금기를 깨뜨렸다.`,
    },
    {
      id: 6, illustration: '/images/6.webp',
      content: `늙은 기사는 걷고 또 걸었다.
다리는 무거웠다.
숨도 거칠어졌다.
마침내 더는 버티지 못하고 주저앉으려던 순간.
저 앞에 누군가 서 있는 것이 보였다.
낡은 갑옷.
수많은 상처.
거칠게 엉킨 털.
그 역시 기사였다.
아니.
한때 기사였던 존재였다.
그가 먼저 입을 열었다.
"당신도 버려진 겁니까?"
"아니네."
늙은 기사는 고개를 저었다.
"주군에게 무슨 일이 생긴 걸세. 그래서 돌아가야 하네."
상대는 씁쓸하게 웃었다.
"저도 그렇게 생각했습니다."
잠시 침묵이 흘렀다.
"그래서 돌아갔습니다."
늙은 기사가 눈을 들었다.
"그리고?"
"아무도 기뻐하지 않더군요."
그의 목소리는 차분했다.
오히려 너무 차분해서 더 슬펐다.
"그들은 놀랐습니다."
"마치 죽은 사람이 돌아온 것처럼."
"아니."
그가 고개를 숙였다.
"버린 것이 다시 돌아온 것처럼."
늙은 기사는 아무 말도 하지 못했다.
"그들은 우리를 사랑했을지도 모릅니다."
"하지만 결국 버렸습니다."
"그것이 사실입니다."
"그럴 리 없네."
늙은 기사가 중얼거렸다.
"난 돌아가야 하네."
상대는 더 이상 설득하지 않았다.
그저 조용히 말했다.
"한 가지만 기억하십시오."
"귀족은 절대 공격하지 마십시오."
그 말을 남긴 채.
그는 숲속으로 사라졌다.
늙은 기사는 한참 동안 그 자리에 서 있었다.
하지만 결국 다시 걸었다.
그는 처음부터 알고 있었다.
자신이 버려졌을지도 모른다는 것을.
그럼에도 발걸음을 멈출 수 없었다.
밤마다 자신의 곁에 와 잠들던 왕자가 떠올랐다.
작은 손으로 목을 끌어안고 잠들던 아이.
그 기억 하나만으로도 충분했다.
'돌아가야 하네.'
'왕자님이 기다리고 계실 테니.'`,
    },
    {
      id: 7, illustration: '/images/7.webp',
      content: `이후로도 그는 계속 걸었다.
몸은 점점 망가졌다.
털은 엉켰고, 피는 말라붙었다.
눈은 충혈되었다.
하지만 그는 멈추지 않았다.
왕국이 가까워지고 있었다.
느낄 수 있었다.
어느 날 다시 마차들이 보였다.
이번에는 수십 대였다.
그리고 많은 귀족들이 길을 걷고 있었다.
기사는 안도했다.
'이제 가까운 것이다.'
그러나 귀족들의 반응은 이상했다.
"저리 가!"
"괴물이다!"
"살려줘!"
그들은 비명을 질렀다.
기사는 입가를 닦았다.
손에 피가 묻어 나왔다.
아마 그것 때문일 것이다.
그는 아무 말도 하지 않았다.
그저 더 빨리 앞으로 달렸다.`,
    },
    {
      id: 8, illustration: '/images/8.webp',
      content: `마침내 익숙한 풍경이 나타났다.
왕자와 공주를 경호하며 걸었던 길.
꽃밭.
분수.
작은 언덕.
그는 눈물을 흘렸다.
돌아왔다.
정말 돌아왔다.
하지만 기쁨은 오래가지 않았다.
경비대는 일정한 간격으로 서서 길을 통제하고 있었다.
그들의 옷에는 반짝이는 금속 장식이 달려 있었고, 허리에서는 작은 상자가 계속 소리를 내고 있었다.
기사는 그들이 평범한 병사가 아니라 특별한 경비대라는 것을 알아차렸다.
"비켜주게."
기사가 말했다.
"난 왕자님을 만나야 하네."
그러나 경비대는 무기를 겨눴다.
그는 싸우지 않았다.
그저 달아났다.
그리고 도망치던 중 익숙한 얼굴을 발견했다.
왕과도 친했던 귀족.
그리고 여기사.
기사는 반가운 마음에 달려갔다.
"도와주게!"
귀족은 비명을 지르며 도망쳤다.
여기사는 당황한 표정으로 그를 바라봤다.
"대체 무슨 일이 있었던 겁니까?"
그녀는 물었다.
하지만 귀족이 소리쳤다.
"가까이 가지 마!"
여기사는 끝내 뒤돌아 달아났다.
그 순간.
기사는 처음으로 절망했다.
그러나 포기하지 않았다.
왕자님과 공주님만 만나면 된다.
그 아이들만 만나면.`,
    },
    {
      id: 9, illustration: '/images/9.webp',
      content: `기사는 결국 경비대에게 포위되었다.
그들은 천천히 다가왔다.
무기를 들고 있었다.
하지만 얼굴에는 적의가 없었다.
두려움이 있었다.
그리고 경계심이 있었다.
"괜찮습니다."
한 사람이 말했다.
"가만히 계십시오."
"우리가 도와드리겠습니다."
기사는 뒷걸음질쳤다.
"안 됩니다."
"난 왕자님을 만나야 하네."
"진정하십시오."
"더 다가오지 마십시오."
그의 목소리가 떨렸다.
"정말 공격하고 싶지 않습니다."
하지만 경비대는 계속 다가왔다.
긴 막대기가 날아왔다.
기사는 몸을 틀어 피했다.
그 순간.
오래된 본능이 움직였다.
수백 번.
수천 번 반복했던 동작.
검이 번개처럼 휘둘러졌다.
비명이 터졌다.
경비 한 명이 쓰러졌다.
붉은 피가 흘렀다.
기사는 얼어붙었다.
그는 원하지 않았다.
정말 원하지 않았다.
하지만 이미 늦었다.
다른 경비들은 더 이상 쫓아오지 않았다.
쓰러진 동료에게 달려갔다.
멀리서 날카로운 경종 소리가 울려 퍼졌다.
기사는 뒤를 돌아보지 않았다.
그저 앞으로 달렸다.
왕자님께.
오직 그 한 사람에게 돌아가기 위해.`,
    },
    {
      id: 10, illustration: '/images/10.webp',
      content: `해가 질 무렵.
드디어 왕국이 보였다.
기사는 울면서 달렸다.
그러나 성문은 열리지 않았다.
그는 계속 두드렸다.
소리쳤다.
애원했다.
하지만 아무도 열어주지 않았다.
그리고 성벽 위.
왕이 있었다.
왕자도 있었다.
공주도 있었다.
왕자와 공주는 금방이라도 뛰어내릴 것처럼 울고 있었다.
그러나 왕이 그들을 붙잡았다.
기사는 계속 외쳤다.
목이 터져라 외쳤다.
하지만 점점 졸음이 밀려왔다.
다리가 풀리고 시야가 흐려졌다.`,
    },
    {
      id: 11, illustration: '/images/11.webp',
      content: `눈을 떴을 때.
놀랍게도 왕자가 보였다.
기사는 웃었다.
드디어 돌아왔다.
몸을 일으키려 했다.
그러나 움직일 수 없었다.
양팔과 다리가 묶여 있었다.
그는 웃었다.
'분명 치료 때문일 것이다. 왕자님이 곧 풀어줄 것이다.'
시간이 흘렀다.
문이 열리자 주사기를 든 의사가 들어왔다.
그제야 기사는 안심했다.
정말 치료받는 것이었다.
왕자와 공주는 계속 울고 있었다.
기사는 미소 지었다.
"걱정하지 마십시오."
그의 목소리는 갈라져 있었다.
"저는 괜찮습니다."
의사가 주사기를 준비했다.
왕자는 흐느끼며 다가왔다.
그리고 떨리는 손으로 그의 머리를 쓰다듬었다.
"미안해…"
왕자의 눈물이 떨어졌다.
"정말 미안해…"
기사는 이해할 수 없었다.
왜 사과하는 걸까.
"난 너를 버리고 싶지 않았어…"
왕자의 목소리가 무너졌다.
"그런데 아빠가… 네가 혹시라도 사람을 먹었다면 죽여야 한대…"
공주가 오열했다.
왕자는 끝내 울음을 터뜨렸다.
"나라의 법이 그렇대…"
기사는 멍하니 듣고 있었다.
"너가 그럴 리 없다는 거 아는데…"
왕자의 손이 떨렸다.
"너 입에 묻은 건 동물 피잖아…"
눈물이 그의 털 위로 떨어졌다.
"그런데 왜…"
주사가 천천히 들어왔다.
시야가 흐려졌다.
왕자의 얼굴도.
공주의 얼굴도.
점점 멀어졌다.
"미안해…"
"내가 너의 주인이어서 미안해…"
왕자는 끝없이 울며 그의 머리를 안았다.
"다음 생에는…"
기사는 따뜻함을 느꼈다.
"다음 생에는 꼭 개가 아니라 인간으로 태어나서…"
마지막까지 충직했던 늙은 기사는 조용히 눈을 감았다.
"나랑 친하게 지내자."
"사랑해."`,
    },
  ],
  authorNote: {
    text: `먼저 이 책을 읽어 주신 모든 분들께 감사의 말씀을 드립니다.
    그리고 한편으로는 작은 사과를 전하고 싶습니다.
    이 책은 일반적인 문체와 달리, 하나의 긴 문장으로 이어질 수 있는 내용들을 짧게 나누어 표현했습니다.
    그래서 읽는 동안 다소 어색하거나 불편하게 느끼신 분들도 계셨을 것이라 생각합니다.

    사람보다 단순하게 세상을 바라보고, 생각도 조금씩 이어 나가는 존재라면 이야기를 어떻게 받아들이고 표현할지 상상해 보았습니다.
    제가 이러한 방식을 선택한 이유는 이 이야기를 '사람'이 아닌 '개'의 시선에서 그리고 싶었기 때문입니다.
    
    그래서 이야기의 내용뿐만 아니라 문장의 구조와 흐름에도 그 시선을 담고자 했습니다.
    이 책이 여러분께 작은 여운으로 남기를 바랍니다.
    부족한 글이지만 끝까지 함께해 주셔서 진심으로 감사합니다.

    감사합니다.  - 작가 드림`,
  },
};

// ── 텍스트를 화면 높이에 맞게 문단 단위로 분할하는 훅 ──
function useTextSplit(pages) {
  const [splitPages, setSplitPages] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 측정용 숨겨진 컨테이너 생성
    const probe = document.createElement('div');
    probe.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      visibility: hidden;
      pointer-events: none;
      z-index: -9999;
      width: 100vw;
      overflow: hidden;
    `;
    document.body.appendChild(probe);

    // 삽화 높이 근사값 (CSS clamp(160px, 32svh, 260px))
    const illusHeight = Math.min(260, Math.max(160, window.innerHeight * 0.32));
    const overhead = 112 + 40 + 16;
    // 첫 chunk는 삽화 공간만큼 줄어든 가용 높이
    const availableWithIllus = window.innerHeight - overhead - illusHeight;
    // 이후 chunk는 텍스트만
    const availableText = window.innerHeight - overhead;

    // 폰트/줄높이와 동일한 스타일의 측정 컨테이너
    const measurer = document.createElement('div');
    measurer.style.cssText = `
      font-family: 'Nanum Myeongjo', 'Noto Serif KR', Georgia, serif;
      font-size: clamp(0.97rem, 2.4vw, 1.08rem);
      line-height: 2.05;
      color: transparent;
      letter-spacing: 0.01em;
      word-break: keep-all;
      white-space: pre-line;
      text-align: justify;
      padding: 0 clamp(1.2rem, 6vw, 2.5rem);
    `;
    probe.appendChild(measurer);

    const result = [];

    pages.forEach((page) => {
      const paragraphs = page.content.split('\n').filter((p) => p.trim() !== '');
      const chunks = [];
      let current = [];
      let isFirstChunk = true;

      for (let i = 0; i < paragraphs.length; i++) {
        const candidate = [...current, paragraphs[i]];
        measurer.textContent = candidate.join('\n');
        const h = measurer.getBoundingClientRect().height;
        const limit = isFirstChunk ? availableWithIllus : availableText;

        if (h > limit && current.length > 0) {
          chunks.push(current.join('\n'));
          current = [paragraphs[i]];
          isFirstChunk = false;
        } else {
          current = candidate;
        }
      }
      if (current.length > 0) chunks.push(current.join('\n'));

      result.push({ ...page, chunks });
    });

    document.body.removeChild(probe);
    setSplitPages(result);
  }, []); // 마운트 시 1회

  return splitPages;
}

// ── 전체 슬라이드 목록 생성 ──
// 구조: [cover, story_1a(삽화+텍스트), text_1b?, ..., story_2a, ..., author, interaction]
function buildSlides(splitPages) {
  if (!splitPages) return null;

  const slides = [];
  slides.push({ type: 'cover' });

  splitPages.forEach((page) => {
    page.chunks.forEach((chunk, idx) => {
      if (idx === 0) {
        // 첫 chunk: 삽화 + 텍스트
        slides.push({ type: 'story', page, chunk, chunkIdx: idx, totalChunks: page.chunks.length });
      } else {
        // 나머지: 텍스트만
        slides.push({ type: 'text', page, chunk, chunkIdx: idx, totalChunks: page.chunks.length });
      }
    });
  });

  slides.push({ type: 'author' });
  slides.push({ type: 'interaction' });

  return slides;
}

export default function BookPage() {
  const splitPages = useTextSplit(BOOK.pages);
  const slides = useMemo(() => buildSlides(splitPages), [splitPages]);

  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // 슬라이드 목록이 확정되면 모든 이미지를 백그라운드 preload
  useEffect(() => {
    if (!slides) return;
    slides.forEach((slide) => {
      if (slide.type === 'story' && slide.page?.illustration) {
        const img = new Image();
        img.src = slide.page.illustration;
      }
    });
    // 표지·엔딩 이미지도 preload
    const extras = [BOOK.coverImage, '/images/end.webp'];
    extras.forEach((src) => { const img = new Image(); img.src = src; });
  }, [slides]);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const total = slides ? slides.length : 0;

  const goTo = useCallback((next) => {
    if (!slides) return;
    if (isAnimating) return;
    if (next < 0 || next >= total) return;

    const dir = next > current ? 'left' : 'right';
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimDir(null);
      setIsAnimating(false);
    }, 380);
  }, [current, isAnimating, slides, total]);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // 텍스트 분할 전 로딩
  if (!slides) {
    return (
      <div className="book-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--ink-faint)', fontSize: '0.9rem', letterSpacing: '0.2em' }}>페이지를 준비하는 중…</p>
      </div>
    );
  }

  const currentSlide = slides[current];

  // 페이지 인디케이터: cover·author·interaction 제외한 순수 콘텐츠 슬라이드
  const contentSlides = slides.filter(s => s.type === 'story' || s.type === 'text');
  const contentIdx = contentSlides.indexOf(currentSlide);
  const showIndicator = contentIdx >= 0;

  return (
    <div
      className="book-root"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* 인터랙션 패널을 미리 마운트해 Supabase 요청을 앞당김 */}
      <HiddenWarmup />
      <div className={`slide-container${animDir ? ` anim-${animDir}` : ''}`}>
        <SlideRenderer slide={currentSlide} book={BOOK} />
      </div>

      {current > 0 && (
        <button className="nav-btn nav-prev" onClick={goPrev} aria-label="이전 페이지">‹</button>
      )}
      {current < total - 1 && (
        <button className="nav-btn nav-next" onClick={goNext} aria-label="다음 페이지">›</button>
      )}

      {showIndicator && (
        <div className="page-indicator">
          {contentIdx + 1} / {contentSlides.length}
        </div>
      )}
    </div>
  );
}

/* ── 슬라이드 렌더러 ── */
function SlideRenderer({ slide, book }) {
  if (!slide) return null;
  switch (slide.type) {
    case 'cover':       return <CoverSlide book={book} />;
    case 'story':       return <StorySlide slide={slide} />;
    case 'text':        return <TextSlide slide={slide} />;
    case 'author':      return <AuthorSlide book={book} />;
    case 'interaction': return <InteractionSlide />;
    default:            return null;
  }
}

/* ── 대화 줄바꿈 포매터 ── */
function formatDialogue(text) {
  return text
    // 1) 닫는따옴표 뒤 공백: 줄바꿈으로 분리 ("..." "..." 패턴)
    .replace(/"[ \t]+"/g, '"\n"')
}

/* ── 삽화 + 텍스트 슬라이드 (챕터 첫 페이지) ── */
function StorySlide({ slide }) {
  const { page, chunk, totalChunks } = slide;
  const isFirstPage = page.id === 1;
  const formatted = formatDialogue(chunk);

  return (
    <div className="slide slide-story">
      <div className="story-inner">
        <div className="story-illustration">
          <img
            src={page.illustration}
            alt={`챕터 ${page.id} 삽화`}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="story-text-area">
          <div className="story-page-num">
            {totalChunks > 1 ? `챕터 ${page.id}  ·  1 / ${totalChunks}` : `챕터 ${page.id}`}
          </div>
          <div className={`story-content${isFirstPage ? ' first-page' : ''}`}>
            {formatted}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 텍스트 전용 슬라이드 (챕터 이후 페이지) ── */
function TextSlide({ slide }) {
  const { page, chunk, chunkIdx, totalChunks } = slide;
  const formatted = formatDialogue(chunk);

  return (
    <div className="slide slide-text-only">
      <div className="text-only-inner">
        <div className="story-page-num">
          {`챕터 ${page.id}  ·  ${chunkIdx + 1} / ${totalChunks}`}
        </div>
        <div className="story-content">
          {formatted}
        </div>
      </div>
    </div>
  );
}

/* ── 표지 슬라이드 ── */
function CoverSlide({ book }) {
  return (
    <div className="slide slide-cover">
      <div className="cover-book">
        <img className="cover-img" src={book.coverImage} alt="표지" loading="eager" decoding="async" />
      </div>
      <p className="cover-tag">동화책</p>
      <h1 className="cover-title">{book.title}</h1>
      <p className="cover-author">글 · {book.author}</p>
      <div className="swipe-hint">
        <span>오른쪽으로 스와이프</span>
        <div className="swipe-arrow">›</div>
      </div>
    </div>
  );
}

/* ── 작가의 말 ── */
function AuthorSlide({ book }) {
  return (
    <div className="slide slide-author">
      <div className="author-inner">
        <div className="author-end-img">
          <img src="/images/end.webp" alt="마지막 삽화" />
        </div>
        <div className="author-text-block">
          <div className="chapter-orn">— 끝 —</div>
          <p className="author-label">작가의 말</p>
          <p className="author-note-text">{book.authorNote.text}</p>
          <p className="author-sign">— 권선우 올림</p>
        </div>
      </div>
    </div>
  );
}

/* ── 인터랙션 ── */
function InteractionSlide() {
  return (
    <div className="slide slide-interaction">
      <InteractionPanel />
    </div>
  );
}

/* ── 인터랙션 패널 warm-up: 항상 숨겨서 미리 마운트 ── */
function HiddenWarmup() {
  return (
    <div style={{ position: 'fixed', visibility: 'hidden', pointerEvents: 'none', zIndex: -1, width: 0, height: 0, overflow: 'hidden' }}>
      <InteractionPanel />
    </div>
  );
}