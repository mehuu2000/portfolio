import styles from '@/styles/sections/selfIntroductionSection.module.css';

export default function SelfIntroductionSection() {
  return (
    <section id="self-introduction" className={styles.section}>
      <h2>Self Introduction</h2>
      <div className={styles.content}>
        {/* 自己紹介の内容 */}
        <p>私はフロントエンド開発者として、モダンなウェブアプリケーションの構築に情熱を持っています。</p>
        {/* その他の自己紹介の内容 */}
      </div>
    </section>
  );
}