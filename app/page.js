'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const InteractionPanel = dynamic(() => import('./components/InteractionPanel'), { ssr: false });

const BASE = ' '
const img = (path) => `${BASE}${path}`;

const BOOK = {
  title: '늙은 기사의 마지막 모험',
  author: '권선우',
  coverImage: '/images/start.jpeg',
  pages: [
    { id: 1, illustration: '/images/1.png', content: `왕국의 사람들은 모두 그를 알고 있었다. 그는 왕국에서 가장 오래된 기사였다. 어린 시절부터 검을 들었고, 늙어서는 왕과 여왕을 지켰다. 왕자가 태어났을 때는 밤새 곁을 지켰고, 공주가 처음 걸음마를 뗐을 때는 혹시 넘어질까 뒤를 따라다녔다.\n\n누군가는 그를 충직하다고 불렀고, 누군가는 우직하다고 불렀다. 하지만 그는 그런 말에 관심이 없었다. 그저 자신의 왕국과 가족을 지키는 것이 행복했다. 그러나 세상은 늘 변한다. 어느 날 왕은 그를 불렀다.\n\n"잠시만 여기서 기다려라." 왕의 목소리는 평소와 같았다. 기사는 고개를 끄덕였다. 왕은 마차에 올라탔고 떠나갔다. 기사는 기다렸다. 하루가 지나고 밤이 찾아왔다. 추위가 찾아왔다. 다음 날 아침이 밝아도 그는 움직이지 않았다. 왕이 기다리라고 했으니까. 둘째 날 저녁이 되었을 때, 기사는 결국 쓰러졌다.` },
    { id: 2, illustration: '/images/2.png', content: `눈을 뜨자 낯선 하늘이 보였다. "정신이 드십니까?" 젊은 용병 하나가 물었다.\n\n기사는 몸을 일으키려 했지만 온몸이 무거웠다. "주근은 어디로 가셨지?" 용병은 잠시 침묵했다. "당신은 버려진 겁니다." 기사는 웃었다. "그럴 리 없네." "현실을 보세요." "그럴 리 없네."\n\n용병은 한숨을 쉬었다. "그럼 왜 아무도 안 돌아왔죠?" 기사는 대답하지 못했다. 하지만 떠나기 직전의 모습이 떠올랐다. 마차 창문 너머로 울고 있던 왕자. 그리고 공주. 그 아이들은 울고 있었다. 그렇다면 분명 이유가 있는 것이다. 그는 그렇게 믿었다. "난 돌아가야 하네."\n\n결국 용병이 포기했다. "내일 아침에 출발하세요." "고맙네." "그리고 조심하십시오… 밖은 괴물로 가득합니다."` },
    { id: 3, illustration: '/images/3.png', content: `다음 날 새벽. 기사는 길을 떠났다. 그는 왕국이 있는 방향을 모른다. 지도도 없다. 단지 느낌만 있었다. 그러나 이상하게도 그것만으로 충분했다.\n\n얼마나 걸었을까, 멀리서 굉음이 들려왔다. 곧 검은 형체들이 번개처럼 지나갔다. 너무 빨라 형태조차 보이지 않았다. 기사는 이를 악물고 뛰었다. 그 순간, 엄청난 속도의 괴물 하나가 눈앞까지 다가왔다. 기사는 죽음을 직감했다. 하지만 괴물은 갑자기 방향을 틀어 그를 피해갔다. 그리고 안에서 누군가 중얼거렸다. "불쌍한 놈…"\n\n기사는 그제야 괴물의 모습을 보았다. 그것은 마차였다. 귀족들이 타는 화려한 마차. 자신을 버리고 떠났던 바로 그 마차.` },
    { id: 4, illustration: '/images/4.png', content: `배고픔이 찾아오기 시작했다. 처음에는 참을 만했다. 하지만 시간이 지날수록 견디기 어려워졌다.\n\n그때 무장한 용병들이 나타났다. 그들은 기사를 발견하자마자 무기를 들었다. "멈춰!" 기사는 손을 들었다. "싸우고 싶지 않네." 하지만 그들은 듣지 않았다. 결국 그는 검을 휘둘렀다. 용병들이 쓰러졌다.\n\n전투가 끝났을 때. 기사는 무릎을 꿇었다. 배가 고팠다. 너무 고팠다. 목도 말랐다. 정신이 흐려졌다. 안 된다는 것을 안다. 절대 해서는 안 된다는 것도 안다. 하지만 본능은 이성을 삼켜 버렸다.\n\n그날 밤. 늙은 기사는 처음으로 금기를 깨뜨렸다.` },
    { id: 5, illustration: '/images/5.png', content: `이후로도 그는 계속 걸었다. 몸은 점점 망가졌다. 털은 엉켰고, 피는 말라붙었다. 눈은 충혈되었다. 하지만 그는 멈추지 않았다.\n\n어느 날 다시 마차들이 보였다. 이번에는 수십 대였다. 그리고 많은 귀족들이 길을 걷고 있었다. 기사는 안도했다. '이제 가까운 것이다.'\n\n그러나 귀족들의 반응은 이상했다. "저리 가!" "괴물이다!" "살려줘!" 그들은 비명을 질렀다. 기사는 입가를 닦았다. 손에 피가 묻어 나왔다. 그는 아무 말도 하지 않았다. 그저 더 빨리 앞으로 달렸다.` },
    { id: 6, illustration: '/images/6.png', content: `마침내 익숙한 풍경이 나타났다. 왕자와 공주를 경호하며 걸었던 길. 꽃밭. 분수. 작은 언덕. 그는 눈물을 흘렸다. 돌아왔다. 정말 돌아왔다.\n\n하지만 기쁨은 오래가지 않았다. 경비대가 길을 막았다. "비켜주게." 기사가 말했다. "난 왕자님을 만나야 하네." 그러나 경비대는 무기를 겨눴다. 그는 싸우지 않았다. 그저 달아났다.\n\n도망치던 중 익숙한 얼굴을 발견했다. 여기사는 당황한 표정으로 그를 바라봤다. "대체 무슨 일이 있었던 겁니까?" 하지만 귀족이 소리쳤다. "가까이 가지 마!" 여기사는 끝내 뒤돌아 달아났다.\n\n그 순간. 기사는 처음으로 절망했다. 그러나 포기하지 않았다. 왕자님과 공주님만 만나면 된다.` },
    { id: 7, illustration: '/images/7.png', content: `해가 질 무렵. 드디어 왕국이 보였다. 기사는 울면서 달렸다. 그러나 성문은 열리지 않았다. 그는 계속 두드렸다. 소리쳤다. 애원했다. 하지만 아무도 열어주지 않았다.\n\n그리고 성벽 위. 왕이 있었다. 왕자도 있었다. 공주도 있었다. 왕자와 공주는 금방이라도 뛰어내릴 것처럼 울고 있었다. 그러나 왕이 그들을 붙잡았다.\n\n기사는 계속 외쳤다. 목이 터져라 외쳤다. 하지만 점점 졸음이 밀려왔다. 다리가 풀리고 시야가 흐려졌다.` },
    { id: 8, illustration: '/images/8.png', content: `눈을 떴을 때. 놀랍게도 왕과 왕자, 공주가 보였다. 기사는 웃었다. 드디어 돌아왔다. 몸을 일으키려 했다. 그러나 움직일 수 없었다. 양팔과 다리가 묶여 있었다.\n\n그는 웃었다. '분명 치료 때문일 것이다. 왕자님이 곧 풀어줄 것이다.'\n\n의사가 주사기를 준비했다. 왕자는 흐느끼며 다가왔다. 그리고 떨리는 손으로 그의 머리를 쓰다듬었다. "미안해…" 왕자의 눈물이 떨어졌다. "정말 미안해…"\n\n"난 너를 버리고 싶지 않았어…" 왕자의 목소리가 무너졌다. "그런데 아빠가… 네가 혹시라도 사람을 먹었다면 죽여야 한대…" "나라의 법이 그렇대…"\n\n주사가 천천히 들어왔다. 시야가 흐려졌다. 왕자의 얼굴도. 공주의 얼굴도. 점점 멀어졌다.\n\n"미안해…" "내가 너의 주인이어서 미안해…" 왕자는 끝없이 울며 그의 머리를 안았다. "다음 생에는 꼭 개가 아니라 인간으로 태어나서…" 마지막까지 충직했던 늙은 기사는 조용히 눈을 감았다. "나랑 친하게 지내자." "사랑해."` },
  ],
  authorNote: {
    avatar: '/images/end.jpeg',
    text: '먼저 이 책을 읽어 주신 모든 분들께 감사의 말씀을 드립니다. 그리고 한편으로는 작은 사과를 전하고 싶습니다. 이 책은 일반적인 문체와 달리, 하나의 긴 문장으로 이어질 수 있는 내용들을 짧게 나누어 표현했습니다. 제가 이러한 방식을 선택한 이유는 이 이야기를 사람이 아닌 개의 시선에서 그리고 싶었기 때문입니다. 부족한 글이지만 끝까지 함께해 주셔서 진심으로 감사합니다.',
     coverImage: '/images/end.jpeg',
  },
};

export default function BookPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="book-root">
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="book-wrapper">
        <section className="cover-section">
          <div className="cover-book">
            <img className="cover-img" src={img(BOOK.coverImage)} alt="표지" />
          </div>
          <p className="cover-tag">동화책</p>
          <h1 className="cover-title">{BOOK.title}</h1>
          <p className="cover-author">글 · {BOOK.author}</p>
          <div className="scroll-hint">
            <span>아래로 스크롤</span>
            <div className="scroll-hint-arrow" />
          </div>
        </section>

        <div className="chapter-divider">
          <div className="chapter-divider-line" />
          <span className="chapter-divider-ornament">✦ ✦ ✦</span>
          <div className="chapter-divider-line" />
        </div>

        <section className="pages-section">
          {BOOK.pages.map((page, idx) => (
            <article key={page.id} className="page-card">
              <div className="page-illustration">
                <img src={img(page.illustration)} alt={`${idx + 1}페이지 삽화`} />
              </div>
              <div className="page-num">페이지 {page.id}</div>
              <div className={`page-content${idx === 0 ? ' first-page' : ''}`}>
                {page.content}
              </div>
            </article>
          ))}
        </section>

        {/* 챕터 끝 장식 */}
<div className="chapter-divider" style={{ marginTop: '2rem' }}>
  <div className="chapter-divider-line" />
  <span className="chapter-divider-ornament">— 끝 —</span>
  <div className="chapter-divider-line" />
</div>

{/* 마지막 삽화 */}
<div className="page-illustration" style={{ marginTop: '3rem' }}>
  <img src="/images/end.jpeg" alt="마지막 삽화" />
</div>

<footer className="footer-section">
  <div className="author-block">
    <div className="author-avatar-wrap" style={{ display: 'none' }}>
      {/* end.jpeg는 위로 이동했으므로 숨김 */}
    </div>
    <p className="author-label">작가의 말</p>
    <p className="author-note-text">{BOOK.authorNote.text}</p>
    <p className="author-sign">— 권선우 올림</p>
  </div>

  <div className="footer-inner-divider" />

  <p className="footer-end-line">늙은 기사의 마지막 모험 · {new Date().getFullYear()}</p>
</footer>
      </div>
    </div>
  );
}
