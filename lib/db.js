import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dbDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dbDir, 'feedback.sqlite');

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.prepare(
  `CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    count INTEGER NOT NULL
  )`
).run();

db.prepare(
  `CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    text TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`
).run();

const seededLikes = db.prepare('INSERT OR IGNORE INTO likes (id, count) VALUES (1, ?)');
seededLikes.run(128);

const commentCount = db.prepare('SELECT COUNT(*) AS count FROM comments').get().count;
if (commentCount === 0) {
  const seedComments = [
    ['새벽의 사색가 402', '지하철에서 읽다가 울컥했네요. 감사합니다.'],
    ['푸른 연필 712', '여운이 길게 남는 작품이에요.'],
  ];
  const insert = db.prepare('INSERT INTO comments (name, text) VALUES (?, ?)');
  const insertMany = db.transaction((rows) => {
    for (const row of rows) insert.run(...row);
  });
  insertMany(seedComments);
}

const anonymousNames = ['익명의 독자', '밤하늘 나그네', '달빛 추적자', '종이비행기'];

export function getLikes() {
  const row = db.prepare('SELECT count FROM likes WHERE id = 1').get();
  return typeof row?.count === 'number' ? row.count : 0;
}

export function updateLikes(delta) {
  db.prepare('UPDATE likes SET count = max(count + ?, 0) WHERE id = 1').run(delta);
  return getLikes();
}

export function getComments() {
  return db.prepare('SELECT id, name, text, created_at FROM comments ORDER BY id ASC').all();
}

export function getComment(id) {
  return db.prepare('SELECT id, name, text, created_at FROM comments WHERE id = ?').get(id);
}

export function addComment(text) {
  const name = `${anonymousNames[Math.floor(Math.random() * anonymousNames.length)]} ${Math.floor(
    Math.random() * 900
  ) + 100}`;
  const info = db.prepare('INSERT INTO comments (name, text) VALUES (?, ?)').run(name, text);
  return {
    id: info.lastInsertRowid,
    name,
    text,
  };
}

export function editComment(id, text) {
  const info = db.prepare('UPDATE comments SET text = ? WHERE id = ?').run(text, id);
  return info.changes > 0 ? getComment(id) : null;
}

export function deleteComment(id) {
  const info = db.prepare('DELETE FROM comments WHERE id = ?').run(id);
  return info.changes > 0;
}
