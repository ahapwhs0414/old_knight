# old_knight

늙은 기사의 마지막 모험을 담은 Next.js 기반 동화책 사이트입니다. 이 리포지터리에는 기존 HTML 페이지와 Next.js 앱이 함께 포함되어 있으며, 현재는 `app/` 폴더의 Next.js 버전을 기준으로 개발되었습니다.

## 주요 기능

- 페이지 단위 스크롤 및 페이지 넘김 UI
- 표지 이미지와 마지막 삽화 표시
- 마지막 페이지에서 좋아요 버튼 기능
- 익명 댓글 작성 및 목록 표시
- 모바일 최적화 레이아웃
- GitHub Actions 기반 GitHub Pages 배포

## 프로젝트 구조

- `app/` - Next.js 앱 소스
- `public/images/` - 표지 및 마지막 삽화 이미지 경로
- `package.json` - 실행/빌드 스크립트와 의존성
- `.github/workflows/deploy.yml` - GitHub Pages 자동 배포 워크플로우
- `README.md` - 프로젝트 설명과 실행 안내

## 실행 방법

1. 의존성 설치
   ```bash
   npm install
   ```
2. 개발 서버 실행
   ```bash
   npm run dev
   ```
3. 브라우저에서 열기
   ```bash
   http://localhost:3000
   ```

## 배포 방법

GitHub에 푸시하면 자동으로 `gh-pages` 브랜치에 배포되는 워크플로우가 실행됩니다.

1. 변경 사항 커밋
   ```bash
   git add .
   git commit -m "Update README and add deployment settings"
   ```
2. GitHub 푸시
   ```bash
   git push origin main
   ```
3. GitHub 저장소의 `Settings > Pages`에서 배포 소스를 `gh-pages` 브랜치의 `/ (root)`로 설정합니다.
4. 배포가 완료되면 `Settings > Pages`에 URL이 표시됩니다.

## 이미지 추가

- 표지 이미지: `public/images/start.jpeg`
- 마지막 삽화: `public/images/end.jpeg`

이미지를 추가하거나 교체하면 사이트에 자동으로 반영됩니다.

## 빌드 명령

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run deploy` - 빌드 실행

## 참고

`package.json`과 `next.config.js`는 정적 출력(`output: 'export'`)을 사용하도록 구성되어 있습니다.
