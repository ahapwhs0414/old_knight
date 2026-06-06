import { NextResponse } from 'next/server';
import { editComment, deleteComment } from '../../../../lib/feedbackStore';

export async function PATCH(request, { params }) {
  const id = Number(params?.id);
  if (!id) {
    return NextResponse.json({ error: '유효한 댓글 ID가 필요합니다.' }, { status: 400 });
  }

  const body = await request.json().catch(() => ({}));
  const text = typeof body?.text === 'string' ? body.text.trim() : '';
  if (!text) {
    return NextResponse.json({ error: '댓글 내용을 입력해주세요.' }, { status: 400 });
  }

  const updated = editComment(id, text);
  if (!updated) {
    return NextResponse.json({ error: '댓글을 찾을 수 없습니다.' }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  const id = Number(params?.id);
  if (!id) {
    return NextResponse.json({ error: '유효한 댓글 ID가 필요합니다.' }, { status: 400 });
  }

  const deleted = deleteComment(id);
  if (!deleted) {
    return NextResponse.json({ error: '댓글을 찾을 수 없습니다.' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
