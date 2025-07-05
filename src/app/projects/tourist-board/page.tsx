import ComingSoon from '@/components/ComingSoon';

export default function ProjectAPage() {
  return (
    <ComingSoon 
      title="Tourist Board of Nara - 準備中"
      message="このプロジェクトページは現在準備中です。"
      imagePath="/projects_img/TouristBoardOfNara/top.png"
      imageAlt="Tourist Board of Naraのトップ画像"
      homeButtonText="トップページへ"
      projectsButtonText="他のプロジェクトを見る"
      resources={[
        {
          url: "https://github.com/mehuu2000/narahack",
          label: "GitHubリポジトリ"
        },
        {
          url: "https://drive.google.com/file/d/1siwnO2JI2e0zUCNt-xveiwbltxsF9No2/view?usp=drive_link",
          label: "プロジェクト説明ドキュメント"
        }
      ]}
    />
  );
}