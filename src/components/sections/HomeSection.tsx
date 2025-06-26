import styles from '@/styles/sections/homeSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

export default function HomeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.avatarContainer}>
              <Image 
                src="/myImage.jpg" 
                alt="Profile Image" 
                width={85}
                height={85}
                className={styles.avatar} 
                priority
              />
            </div>
            <div className={styles.titleContainer}>
              <h1>Welcome to My Portfolio</h1>
              <div className={styles.nameWrapper}>
                <p className={styles.nameText}>濱田真仁</p>
              </div>
            </div>
          </div>
          <div className={styles.heroFooter}>
            <Link href="/site" className={styles.subtleLink}>
              このサイトについて
            </Link>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <PersonIcon fontSize="inherit" />
            </div>
            <div className={styles.featureContent}>
              <h2>自己紹介</h2>
              <div className={styles.featureText}>
                <p>名前や経歴、スキルセットなどの</p>
                <p>基本情報を紹介します。</p>
              </div>
            </div>
            <div className={styles.featureFooter}>
              <Link href="/about" className={styles.ctaButton}>
                詳しく見る
              </Link>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <CodeIcon fontSize="inherit" />
            </div>
            <div className={styles.featureContent}>
              <h2>プロジェクト紹介</h2>
              <div className={styles.featureText}>
                <p>これまでに作成したプロジェクトを</p>
                <p>ご紹介します。</p>
              </div>
            </div>
            <div className={styles.featureFooter}>
              <Link href="/projects" className={styles.ctaButton}>
                作品を見る
              </Link>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <EmailIcon fontSize="inherit" />
            </div>
            <div className={styles.featureContent}>
              <h2>お問い合わせ</h2>
              <div className={styles.featureText}>
                <p>連絡やちょっとした質問などがありましたら、お気軽にお問い合わせください。</p>
              </div>
            </div>
            <div className={styles.featureFooter}>
              <Link href="/contact" className={styles.ctaButton}>
                連絡する
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}