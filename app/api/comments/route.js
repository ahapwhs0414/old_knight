import { NextResponse } from 'next/server';
import { getComments, addComment } from '../../../lib/feedbackStore';

export async function GET() {
  return NextResponse.json({ comments: getComments() });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const text = typeof body?.text === 'string' ? body.text.trim() : '';

  if (!text) {
    return NextResponse.json({ error: '댓글 내용을 입력해주세요.' }, { status: 400 });
  }

  const newComment = addComment(text);
  return NextResponse.json(newComment);
}
