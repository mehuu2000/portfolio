import ComingSoon from '@/components/ComingSoon';

export default function ProjectAPage() {
  return (
    <ComingSoon 
      title="笑ってKUYO - 準備中"
      message="このプロジェクトページは現在準備中です。"
      imagePath="/projects_img/waratteKUYO/top.png"
      imageAlt="笑ってKUYOのトップ画像"
      homeButtonText="トップページへ"
      projectsButtonText="他のプロジェクトを見る"
      resources={[
        {
          url: "https://github.com/lXlMeteor/YamaClub2",
          label: "GitHubリポジトリ"
        },
        {
          url: "https://drive.google.com/file/d/1QoSXy1jEOpSK5FM7IdwNSE5OZs9whRYj/view?usp=drive_link",
          label: "プロジェクト説明スライド"
        }
      ]}
    />
  );
}