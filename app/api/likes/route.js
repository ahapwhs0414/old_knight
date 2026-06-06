import { supabase } from '../../../lib/supabase';

export async function GET() {
  const { count, error } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ count: count ?? 0 });
}

export async function POST(request) {
  const { visitorId } = await request.json();

  if (!visitorId) {
    return Response.json({ error: 'visitorId가 필요합니다.' }, { status: 400 });
  }

  // 이미 좋아요를 눌렀는지 확인
  const { data: existing } = await supabase
    .from('likes')
    .select('id')
    .eq('visitor_id', visitorId)
    .maybeSingle();

  if (existing) {
    // 좋아요 취소
    const { error } = await supabase
      .from('likes')
      .delete()
      .eq('visitor_id', visitorId);

    if (error) return Response.json({ error: error.message }, { status: 500 });

    const { count } = await supabase
      .from('likes')
      .select('*', { count: 'exact', head: true });

    return Response.json({ liked: false, count: count ?? 0 });
  } else {
    // 좋아요 추가
    const { error } = await supabase
      .from('likes')
      .insert({ visitor_id: visitorId });

    if (error) return Response.json({ error: error.message }, { status: 500 });

    const { count } = await supabase
      .from('likes')
      .select('*', { count: 'exact', head: true });

    return Response.json({ liked: true, count: count ?? 0 });
  }
}
