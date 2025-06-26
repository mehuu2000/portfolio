import styles from '@/styles/sections/projectsSection.module.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {/* プロジェクト一覧 */}
        {/* プロジェクトカードなどのコンポーネントをマッピングすることもできます */}
      </div>
    </section>
  );
}