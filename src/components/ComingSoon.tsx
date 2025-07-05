'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowBack, Construction } from '@mui/icons-material';
import Image from 'next/image';
import styles from '@/styles/components/comingSoon.module.css';

interface ComingSoonProps {
  title?: string;
  message?: string;
  imagePath?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  showHomeButton?: boolean;
  showProjectsButton?: boolean;
  homeButtonText?: string;
  projectsButtonText?: string;
}

export default function ComingSoon({
  title = '準備中',
  message = 'このプロジェクトページは現在準備中です。\n近日公開予定ですので、しばらくお待ちください。',
  imagePath = '/images/coming_soon.svg',
  imageAlt = '準備中イラスト',
  imageWidth = 400,
  imageHeight = 300,
  showHomeButton = true,
  showProjectsButton = true,
  homeButtonText = 'ホームに戻る',
  projectsButtonText = 'プロジェクト一覧へ'
}: ComingSoonProps) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button 
          onClick={() => router.back()} 
          className={styles.backButton}
          aria-label="前のページに戻る"
        >
          <ArrowBack /> 戻る
        </button>
      </div>

      <div className={styles.comingSoonContent}>
        <div className={styles.iconContainer}>
          <Construction className={styles.constructionIcon} />
        </div>
        
        <h1 className={styles.title}>{title}</h1>
        
        <p className={styles.message}>
          {message.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < message.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        
        <div className={styles.imageContainer}>
          <Image
            src={imagePath}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={styles.comingSoonImage}
          />
        </div>
        
        <div className={styles.actions}>
          {showHomeButton && (
            <button 
              onClick={() => router.push('/')} 
              className={styles.homeButton}
            >
              {homeButtonText}
            </button>
          )}
          
          {showProjectsButton && (
            <button 
              onClick={() => router.push('/projects')} 
              className={styles.projectsButton}
            >
              {projectsButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}