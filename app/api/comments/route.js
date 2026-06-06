import { supabase } from '../../../lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('comments')
    .select('id, nickname, content, created_at')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ comments: data });
}

export async function POST(request) {
  const { nickname, content } = await request.json();

  if (!content || content.trim().length === 0) {
    return Response.json({ error: '내용을 입력해주세요.' }, { status: 400 });
  }

  if (content.trim().length > 300) {
    return Response.json({ error: '댓글은 300자 이내로 작성해주세요.' }, { status: 400 });
  }

  const finalNickname = nickname?.trim() || '익명의 독자';

  const { data, error } = await supabase
    .from('comments')
    .insert({
      nickname: finalNickname,
      content: content.trim(),
    })
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ comment: data }, { status: 201 });
}
