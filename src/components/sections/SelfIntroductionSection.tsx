import styles from '@/styles/sections/selfIntroductionSection.module.css';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function SelfIntroductionSection() {
  return (
    <section id="self-introduction" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>自己紹介</h2>
          <span className={styles.dateInfo}>(2025/6/30時点)</span>
        </div>
        
        {/* 基本情報カード - 変更なし */}
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.profileHeaderContent}>
              <div className={styles.headerIcon}>
                <SchoolIcon />
              </div>
              <h3>基本情報</h3>
            </div>
          </div>
          <div className={styles.profileContent}>
            <ul className={styles.profileList}>
              <li><span className={styles.label}>氏名：</span>濱田真仁</li>
              <li><span className={styles.label}>大学：</span>関西大学 総合情報学部 総合情報学科</li>
              <li><span className={styles.label}>入学：</span>2023年4月</li>
              <li><span className={styles.label}>卒業予定：</span>2027年3月</li>
            </ul>
            <p className={styles.profileDesc}>現在はWebアプリケーションのバックエンド開発を担当しています。その中でも、データベース設計やAPI開発に特に興味があります。</p>
          </div>
        </div>

        {/* スキルセットカード - 単独で表示 */}
        <div className={styles.skillCard}>
          <div className={styles.cardIcon}>
            <CodeIcon />
          </div>
          <h3>スキルセット</h3>
          <div className={styles.skillGroups}>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillCategory}>プログラミング言語</h4>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>Python</div>
                <div className={styles.skillItem}>JavaScript</div>
                <div className={styles.skillItem}>TypeScript</div>
              </div>
            </div>
            
            <div className={styles.skillGroup}>
              <h4 className={styles.skillCategory}>フレームワーク</h4>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>Flask</div>
                <div className={styles.skillItem}>Next.js</div>
                <div className={styles.skillItem}>FastAPI</div>
              </div>
            </div>
            
            <div className={styles.skillGroup}>
              <h4 className={styles.skillCategory}>データベース</h4>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>PostgreSQL</div>
                <div className={styles.skillItem}>MySQL</div>
              </div>
            </div>
            
            <div className={styles.skillGroup}>
              <h4 className={styles.skillCategory}>クラウドサービス</h4>
              <div className={styles.skillItems}>
                <div className={styles.skillItem}>Railway</div>
                <div className={styles.skillItem}>Supabase</div>
                <div className={styles.skillItem}>Vercel</div>
                <div className={styles.skillItem}>Cloudflare</div>
                <div className={styles.skillItem}>Netlify</div>
              </div>
            </div>
          </div>
        </div>

        {/* 残りの3つのカード - グリッドで表示 */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <SportsEsportsIcon />
            </div>
            <h3>趣味</h3>
            <div className={styles.hobbyTags}>
              <span className={styles.hobbyTag}>ゲーム</span>
              <span className={styles.hobbyTag}>アニメ鑑賞</span>
              <span className={styles.hobbyTag}>読書</span>
              <span className={styles.hobbyTag}>プログラミング</span>
              <span className={styles.hobbyTag}>水泳</span>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <StarIcon />
            </div>
            <h3>自分の強み</h3>
            <p className={styles.strengthText}>
              私の強みは、<span className={styles.highlight}>挑戦心</span>と<span className={styles.highlight}>目標にむかって走り続けられる力</span>です。
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <LightbulbIcon />
            </div>
            <h3>現在の興味関心</h3>
            <p>
              主にバックエンドでデータベース設計、API開発に興味があります。また、最近ではゲームの分野も興味があり、ゲームのバックエンドに興味を持ち始めています。
            </p>
          </div>
        </div>

        {/* 学習カード - 変更なし */}
        <div className={styles.learningCard}>
          <div className={styles.cardIcon}>
            <AutoStoriesIcon />
          </div>
          <h3>現在学習しようとしているもの</h3>
          
          <div className={styles.learningCategories}>
            <div className={styles.learningCategory}>
              <h4 className={styles.learningCategoryTitle}>プログラミング言語</h4>
              <ul className={styles.categorizedList}>
                <li>Goの学習</li>
                <li>Rust, PHP, Rubyなどの理解<span className={styles.note}>(参加や就職する企業で柔軟に切り替える予定)</span></li>
                <li>C++の学習</li>
              </ul>
            </div>
            
            <div className={styles.learningCategory}>
              <h4 className={styles.learningCategoryTitle}>バックエンド技術</h4>
              <ul className={styles.categorizedList}>
                <li>アーキテクチャの理解と実践</li>
                <li>AWS・GCPなどのクラウド技術</li>
                <li>テスト手法の習得</li>
                <li>セキュリティの理解</li>
              </ul>
            </div>
            
            <div className={styles.learningCategory}>
              <h4 className={styles.learningCategoryTitle}>資格・経験</h4>
              <ul className={styles.categorizedList}>
                <li>基本情報技術者試験<span className={styles.note}>(遅くとも夏季休暇の終わりまでに取得)</span></li>
                <li>応用情報技術者試験<span className={styles.note}>(早ければ秋に、できれば来年の春には取得)</span></li>
                <li>サマーインターンシップでの実務体験<span className={styles.note}>(現参加企業以外でも)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}