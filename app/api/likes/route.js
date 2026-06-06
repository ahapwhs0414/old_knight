import { NextResponse } from 'next/server';
import { getLikes, updateLikes } from '../../../lib/feedbackStore';

export async function GET() {
  return NextResponse.json({ likes: getLikes() });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const action = body?.action === 'unlike' ? 'unlike' : 'like';
  const delta = action === 'unlike' ? -1 : 1;
  const likes = updateLikes(delta);
  return NextResponse.json({ likes });
}
