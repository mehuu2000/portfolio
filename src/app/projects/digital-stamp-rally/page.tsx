import ComingSoon from '@/components/ComingSoon';

export default function ProjectAPage() {
  return (
    <ComingSoon 
      title="でジタルスタンプラリー - 準備中"
      message="このプロジェクトページは現在準備中です。"
      imagePath="/projects_img/digitalStampRally/top.png"
      imageAlt="デジタルスタンプラリーのトップ画像"
      homeButtonText="トップページへ"
      projectsButtonText="他のプロジェクトを見る"
      resources={[
        {
          url: "https://github.com/mehuu2000/StanpRally",
          label: "GitHubリポジトリ"
        },
        {
          url: "https://drive.google.com/file/d/1e-K5mwVWk3jBDqSd_3iGxeXDB1C1QKyF/view?usp=sharing",
          label: "プロジェクト説明ドキュメント"
        }
      ]}
    />
  );
}