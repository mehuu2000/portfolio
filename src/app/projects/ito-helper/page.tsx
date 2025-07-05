import ComingSoon from '@/components/ComingSoon';

export default function ProjectAPage() {
  return (
    <ComingSoon 
      title="ItoHelper - 準備中"
      message="このプロジェクトページは現在準備中です。"
      imagePath="/projects_img/itoHelper/top.png"
      imageAlt="ItoHelperのトップ画像"
      homeButtonText="トップページへ"
      projectsButtonText="他のプロジェクトを見る"
      resources={[
        {
          url: "https://github.com/mehuu2000/ItoHelper_project",
          label: "GitHubリポジトリ"
        },
        {
          url: "https://drive.google.com/file/d/11CKyH2wYR-7PgV-df2BIbVlDAEHe3_P1/view?usp=drive_link",
          label: "プロジェクト説明ドキュメント"
        }
      ]}
    />
  );
}