'use client';

import React, { useState, useEffect } from 'react';

const BOOK_DATA = {
  title: '달빛 아래의 사색',
  author: '김작가',
  coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000',
  pages: [
    {
      id: 1,
      illustration: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600',
      content:
        '첫 번째 단락입니다. 바다의 잔잔한 파도 소리를 들으며 주인공은 깊은 생각에 잠겼습니다.\n\n지나간 여름날의 기억들이 파도와 함께 밀려왔다 사라지기를 반복했습니다. 그 속에서 찾은 작은 의미는 무엇이었을까요?',
    },
    {
      id: 2,
      illustration: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600',
      content:
        '두 번째 단락입니다. 깊은 숲속을 걷다 보면 세상의 모든 소음이 잦아듭니다.\n\n초록빛 잎사귀 사이로 쏟아지는 햇살은 마치 누군가의 따뜻한 위로처럼 어깨를 감싸 안았습니다. 그는 한 걸음 더 내딛기로 결심했습니다.',
    },
  ],
  authorNote: {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
    text:
      '이 책을 끝까지 읽어주신 모든 독자분들께 진심으로 감사드립니다. 바쁜 일상 속에서 잠시나마 숨을 고를 수 있는 시간이 되었기를 바랍니다. 다음 이야기로 다시 찾아뵙겠습니다.',
  },
};

export default function MobileScrollBook() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [likes, setLikes] = useState(128);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, name: '새벽의 사색가 402', text: '지하철에서 읽다가 울컥했네요. 감사합니다.' },
    { id: 2, name: '푸른 연필 712', text: '여운이 길게 남는 작품이에요.' },
  ]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const anonymousNames = ['익명의 독자', '밤하늘 나그네', '달빛 추적자', '종이비행기'];
    const randomName = `${anonymousNames[Math.floor(Math.random() * anonymousNames.length)]} ${Math.floor(
      Math.random() * 900
    ) + 100}`;

    setComments([...comments, { id: Date.now(), name: randomName, text: newComment.trim() }]);
    setNewComment('');
  };

  return (
    <div className="mobile-scroll-book">
      <div className="sticky-bar">
        <div className="top-row">
          <span className="eyebrow">Reading Now</span>
          <h1 className="sticky-title">{BOOK_DATA.title}</h1>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>

      <section className="cover-section">
        <div className="book-cover">
          <img src={BOOK_DATA.coverImage} alt="Cover" />
        </div>
        <h2>{BOOK_DATA.title}</h2>
        <p className="cover-author">{BOOK_DATA.author} 지음</p>
        <div className="cover-hint">
          <span>위로 스크롤하여 읽기</span>
          <span>↓</span>
        </div>
      </section>

      <section className="pages-section">
        {BOOK_DATA.pages.map((page) => (
          <article key={page.id} className="page-card">
            <div className="page-illustration">
              <img src={page.illustration} alt={`illustration-${page.id}`} />
            </div>
            <div className="page-content">{page.content}</div>
          </article>
        ))}
      </section>

      <section className="footer-section">
        <div className="footer-inner">
          <div className="author-note">
            <div className="author-avatar">
              <img src={BOOK_DATA.authorNote.avatar} alt="Author" />
            </div>
            <h3>작가의 말</h3>
            <p className="author-text">“{BOOK_DATA.authorNote.text}”</p>
            <p className="author-sign">김작가 올림</p>
          </div>

          <div className="interaction-panel">
            <div className="congrats">
              <h4>The End. 완독을 축하합니다.</h4>
              <button type="button" className={`like-button ${hasLiked ? 'active' : ''}`} onClick={handleLike}>
                <svg viewBox="0 0 24 24" fill={hasLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span>좋아요 {likes}</span>
              </button>
            </div>

            <div>
              <h5 className="comments-heading">Comments ({comments.length})</h5>
              <div className="comments-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-card">
                    <div className="comment-name">{comment.name}</div>
                    <div className="comment-text">{comment.text}</div>
                  </div>
                ))}
              </div>

              <form className="comment-form" onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="익명으로 여운을 나눠보세요..."
                  className="comment-input"
                  maxLength={60}
                />
                <button type="submit" className="comment-submit">
                  남기기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
