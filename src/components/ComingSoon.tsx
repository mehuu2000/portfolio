'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowBack, Construction, LinkOutlined } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/comingSoon.module.css';

interface ResourceLink {
  url: string; // URLは必須
  label: string;
}

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
  resources?: ResourceLink[]; // プロジェクト資料へのリンク配列
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
  projectsButtonText = 'プロジェクト一覧へ',
  resources = [] // デフォルトは空配列
}: ComingSoonProps) {
  const router = useRouter();

  // 全てのURLが外部URLとして扱う（http(s)で始まるリンク）
  const isExternalUrl = (url: string) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

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
        
        {/* プロジェクト関連リンク */}
        {resources.length > 0 && (
          <div className={styles.resourcesSection}>
            <h2 className={styles.resourcesTitle}>関連リンク</h2>
            <div className={styles.resourcesList}>
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.url}
                  target={isExternalUrl(resource.url) ? "_blank" : undefined}
                  rel={isExternalUrl(resource.url) ? "noopener noreferrer" : undefined}
                  className={styles.resourceLink}
                >
                  <span className={styles.resourceLabel}>{resource.label}</span>
                  {isExternalUrl(resource.url) && (
                    <LinkOutlined className={styles.externalLinkIcon} fontSize="small" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
        
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