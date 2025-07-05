import styles from '@/styles/sections/contactSection.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article'; // Zenn用のアイコン
import LinkIcon from '@mui/icons-material/Link'; // URL表示用

export default function ContactSection() {
  // 連絡先情報の定義
  const contactInfo = {
    email: "mehuu2000@gmail.com",
    github: "https://github.com/mehuu2000",
    zenn: "https://zenn.dev/hamachii"
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>お問い合わせやフォローはこちらからお願いします</p>
        
        <div className={styles.contactCard}>
          <div className={styles.contactMethod}>
            <div className={styles.iconWrapper}>
              <EmailIcon />
            </div>
            <div className={styles.contactDetails}>
              <h3>メール</h3>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
          </div>
          
          <div className={styles.separator}></div>
          
          <div className={styles.socialLinks}>
            <h3>その他URL</h3>
            
            <div className={styles.socialList}>
              <div className={styles.socialItem}>
                <div className={styles.socialIconTitle}>
                  <GitHubIcon className={styles.socialIcon} />
                  <span className={styles.socialTitle}>GitHub</span>
                </div>
                <div className={styles.socialUrl}>
                  <LinkIcon className={styles.linkIcon} />
                  <a 
                    href={contactInfo.github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    {contactInfo.github}
                  </a>
                </div>
              </div>
              
              <div className={styles.socialItem}>
                <div className={styles.socialIconTitle}>
                  <ArticleIcon className={styles.socialIcon} />
                  <span className={styles.socialTitle}>Zenn</span>
                </div>
                <div className={styles.socialUrl}>
                  <LinkIcon className={styles.linkIcon} />
                  <a 
                    href={contactInfo.zenn}
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    {contactInfo.zenn}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.note}>
            <p>※ 学校やインターンの状況によっては、返信に時間がかかる場合があります。</p>
          </div>
        </div>
      </div>
    </section>
  );
}