'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13の新しいナビゲーションをインポート
import styles from '@/styles/sections/projectsSection.module.css';

// プロジェクトデータの型定義
interface Project {
  id: string;
  title: string;
  image: string;
  summary: string;
  members: string;
  role: string;
  tags?: string[];
}

export default function ProjectsSection() {
  const router = useRouter(); // useRouterフックを初期化
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // プロジェクト詳細ページに遷移する関数
  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  // プロジェクトデータ
  const projects: Project[] = [
    {
      id: 'tabitomo',
      title: 'たびとも',
      image: '/projects_img/tabitomo/top.png',
      summary: '旅行先・観光先をAIなどを使ってオススメし、旅行計画を立てるWebアプリケーションです。',
      members: '個人開発',
      role: '全て',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Flask', 'FastAPI', 'AI']
    },
    {
      id: 'waratte-kuyo',
      title: '笑ってKUYO',
      image: '/projects_img/waratteKUYO/top.png',
      summary: 'ユーザーの黒歴史や恥ずかしいエピソードを投稿し、他のユーザーと共有することでそのエピソードを供養しようとするSNS Webアプリケーションです。',
      members: '3人',
      role: 'バックエンド全て(環境構築、API開発、データベース設計、デプロイメントなど)',
      tags: ['Next.js', 'TypeScript', 'Flask', 'PostgreSQL', 'Railway', 'Netlify']
    },
    {
      id: 'digital-stamp-rally',
      title: 'デジタルスタンプラリー',
      image: '/projects_img/digitalStampRally/top.png',
      summary: '関西大学の2025年の文化フェスティバルで使用するスタンプラリーをWebアプリケーションとして開発しました。',
      members: '3人',
      role: 'バックエンドの一部(環境構築、API開発(一部)、データベース設計、デプロイメントなど)',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel']
    },
    {
      id: 'ito-helper',
      title: 'ItoHelper',
      image: '/projects_img/itoHelper/top.png',
      summary: 'ボードゲームItoをより楽しむためのWebアプリケーションです。ゲームの進行を管理する機能を持ちます。',
      members: '個人開発',
      role: '全て',
      tags: ['Next.js', 'PostgreSQL', 'Vercel']
    },
    {
      id: 'tourist-board',
      title: 'Tourist Board of Nara',
      image: '/projects_img/TouristBoardOfNara/top.png',
      summary: '奈良の観光地の管理者が高齢化してきている。最近のSNSやブログの作成ができない人でも簡単に観光地の情報を発信できるようにするためのWebアプリケーションです。',
      members: '3人',
      role: 'バックエンド全て(環境構築、API開発、データベース設計など)',
      tags: ['Next.js', 'PostgreSQL']
    },
    {
      id: 'internship',
      title: 'インターンシップ プロジェクト',
      image: '/projects_img/company/ipsiron.png',
      summary: '詳細は伏せさせていただきます。',
      members: '社内チーム',
      role: 'プロジェクトマネージャー + バックエンドエンジニア',
      tags: ['機密情報のため非公開']
    }
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>これまでに携わった主なプロジェクト</p>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={styles.projectCard}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProjectClick(project.id)} // クリックイベントを追加
              role="button" // アクセシビリティのためにロールを追加
              tabIndex={0} // キーボードでフォーカス可能にする
              onKeyDown={(e) => {
                // Enterキーでも遷移できるようにする（アクセシビリティ対応）
                if (e.key === 'Enter') {
                  handleProjectClick(project.id);
                }
              }}
            >
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={`${project.title} のサムネイル画像`}
                  width={400}
                  height={225}
                  className={styles.projectImage}
                />
                {hoveredId === project.id && (
                  <div className={styles.projectOverlay}>
                    <div className={styles.projectDetails}>
                      <p className={styles.projectMembers}>
                        <span className={styles.detailLabel}>開発メンバー:</span> {project.members}
                      </p>
                      <p className={styles.projectRole}>
                        <span className={styles.detailLabel}>担当:</span> {project.role}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
                
                {project.tags && (
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.projectTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <p className={styles.projectsNote}>
          詳細な情報は、各プロジェクトをクリックすると確認できます。
        </p>
      </div>
    </section>
  );
}