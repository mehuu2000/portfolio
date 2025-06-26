import styles from '@/styles/sections/contactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact</h2>
      <div className={styles.contactForm}>
        {/* 連絡先フォームやSNSリンクなど */}
      </div>
    </section>
  );
}