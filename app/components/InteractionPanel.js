'use client';

import { useState, useEffect, useRef } from 'react';

// 브라우저마다 고유한 방문자 ID 생성 (localStorage 기반)
function getVisitorId() {
  if (typeof window === 'undefined') return null;
  let id = localStorage.getItem('visitor_id');
  if (!id) {
    id = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('visitor_id', id);
  }
  return id;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function InteractionPanel() {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  const [comments, setComments] = useState([]);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('');
  const [commentsLoading, setCommentsLoading] = useState(true);

  const commentsEndRef = useRef(null);

  // 초기 데이터 로드
  useEffect(() => {
    const visitorId = getVisitorId();

    // 좋아요 수 + 내 좋아요 여부
    fetch('/api/likes')
      .then((r) => r.json())
      .then(({ count }) => {
        setLikeCount(count);
        // 로컬에 좋아요 상태 캐시
        const cached = localStorage.getItem('liked');
        if (cached === 'true') setLiked(true);
      })
      .catch(console.error);

    // 댓글 목록
    fetch('/api/comments')
      .then((r) => r.json())
      .then(({ comments }) => {
        setComments(comments || []);
        setCommentsLoading(false);
      })
      .catch(() => setCommentsLoading(false));
  }, []);

  // 좋아요 토글
  const handleLike = async () => {
    if (likeLoading) return;
    const visitorId = getVisitorId();
    setLikeLoading(true);

    try {
      const res = await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId }),
      });
      const data = await res.json();
      setLikeCount(data.count);
      setLiked(data.liked);
      localStorage.setItem('liked', data.liked ? 'true' : 'false');
    } catch (e) {
      console.error(e);
    } finally {
      setLikeLoading(false);
    }
  };

  // 댓글 제출
  const handleSubmit = async () => {
    if (!content.trim() || submitting) return;
    setSubmitting(true);
    setSubmitMsg('');

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, content }),
      });
      const data = await res.json();

      if (!res.ok) {
        setSubmitMsg(data.error || '오류가 발생했습니다.');
      } else {
        setComments((prev) => [data.comment, ...prev]);
        setContent('');
        setNickname('');
        setSubmitMsg('댓글이 등록되었습니다.');
        setTimeout(() => setSubmitMsg(''), 3000);
      }
    } catch (e) {
      setSubmitMsg('네트워크 오류가 발생했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <div className="interaction-root">
      {/* ── 좋아요 ── */}
      <div className="like-section">
        <p className="interaction-eyebrow">이 이야기가 마음에 드셨나요?</p>
        <button
          className={`like-btn${liked ? ' liked' : ''}`}
          onClick={handleLike}
          disabled={likeLoading}
          aria-label="좋아요"
        >
          <span className="like-heart">{liked ? '♥' : '♡'}</span>
          <span className="like-label">{liked ? '마음에 들어요' : '마음에 들었어요'}</span>
          <span className="like-count">{likeCount}</span>
        </button>
      </div>

      {/* ── 구분선 ── */}
      <div className="interaction-divider">
        <div className="interaction-divider-line" />
        <span className="interaction-divider-ornament">✦</span>
        <div className="interaction-divider-line" />
      </div>

      {/* ── 댓글 ── */}
      <div className="comments-section">
        <p className="interaction-eyebrow">독자의 말</p>

        {/* 댓글 목록 */}
        <div className="comments-list">
          {commentsLoading && (
            <p className="comments-empty">불러오는 중…</p>
          )}
          {!commentsLoading && comments.length === 0 && (
            <p className="comments-empty">아직 댓글이 없습니다. 첫 번째 독자가 되어보세요.</p>
          )}
          {comments.map((c) => (
            <div key={c.id} className="comment-card">
              <div className="comment-meta">
                <span className="comment-nick">{c.nickname}</span>
                <span className="comment-date">{formatDate(c.created_at)}</span>
              </div>
              <p className="comment-body">{c.content}</p>
            </div>
          ))}
          <div ref={commentsEndRef} />
        </div>

        {/* 댓글 작성 */}
        <div className="comment-form">
          <input
            className="comment-input nickname-input"
            type="text"
            placeholder="닉네임 (선택, 비워두면 익명)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={20}
          />
          <textarea
            className="comment-input content-input"
            placeholder="이야기에 대한 감상을 남겨주세요… (Ctrl+Enter로 등록)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={300}
            rows={4}
          />
          <div className="comment-form-footer">
            <span className="char-count">{content.length} / 300</span>
            <button
              className="comment-submit-btn"
              onClick={handleSubmit}
              disabled={submitting || !content.trim()}
            >
              {submitting ? '등록 중…' : '댓글 남기기'}
            </button>
          </div>
          {submitMsg && (
            <p className="submit-msg">{submitMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}
