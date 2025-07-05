'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowBack, LightbulbOutlined, ArrowForward, GitHub } from '@mui/icons-material';
import styles from '@/styles/projects/tabitomo.module.css';

export default function TabitomoPage() {
  const router = useRouter();

  // プロジェクト情報
  const project = {
    title: 'たびとも',
    image: '/projects_img/tabitomo/top.png',
    summary: '旅行先・観光先をAIなどを使ってオススメし、旅行計画を立てるWebアプリケーションです。',
    members: '個人開発',
    role: '全て',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Flask', 'FastAPI', 'AI'],
    githubUrl: 'https://github.com/mehuu2000/tabinoOtomo'
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button 
          onClick={() => router.back()} 
          className={styles.backButton}
        >
          <ArrowBack /> 戻る
        </button>
        <h1 className={styles.title}>{project.title}</h1>
      </div>

      <div className={styles.heroImage}>
        <Image
          src={project.image}
          alt={`${project.title} のメイン画像`}
          width={1200}
          height={600}
          className={styles.mainImage}
          priority
        />
      </div>

      <div className={styles.content}>
        <div className={styles.overview}>
          <h2>概要</h2>
          <p>{project.summary}</p>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <h3>開発メンバー</h3>
            <p>{project.members}</p>
          </div>

          <div className={styles.detailItem}>
            <h3>担当役割</h3>
            <p>{project.role}</p>
          </div>

          {project.tags && (
            <div className={styles.detailItem}>
              <h3>使用技術</h3>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          )}
          {/* GitHubリポジトリへのリンク */}
          {project.githubUrl && (
            <div className={styles.detailItem}>
              <h3>リポジトリ</h3>
              <div className={styles.repoLink}>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <GitHub className={styles.githubIcon} />
                  <span>GitHubでコードを見る</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* プロジェクト概要セクション - スライド/カード形式 */}
        <div className={styles.slideSection}>
          <h2 className={styles.sectionTitle}>プロジェクト概要</h2>
          
          {/* スライド1: 開発の背景 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>開発の背景</h3>
            <div className={styles.cardContent}>
              <div className={styles.motiveBox}>
                <p className={styles.motiveTitle}>APIを使う・開発したい</p>
                <ul className={styles.motiveList}>
                  <li>APIの勉強</li>
                  <li>自分なりのアイデアを加えた作品</li>
                  <li>自分で作れるもの</li>
                  <li>Next.js・TypeScriptを使って開発</li>
                </ul>
              </div>
              
              <div className={styles.ideaBox}>
                <div className={styles.ideaIcon}>
                  <LightbulbOutlined className={styles.bulbIcon} />
                </div>
                <p className={styles.ideaText}>旅行先を提案するアプリを作ろう</p>
              </div>
              
              <div className={styles.resultBox}>
                <p className={styles.resultIntro}>色々ありまして...</p>
                <p className={styles.resultText}>
                  結果的に旅行先をAIを使ってオススメして、
                  ユーザーが旅行のしおりを作るような
                  アプリになりました
                </p>
              </div>
            </div>
          </div>
          
          {/* スライド2: 機能説明 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>機能説明</h3>
            <div className={styles.cardContent}>
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureImageWrap}>
                    <Image
                      src="/projects_img/tabitomo/serchImg.png"
                      alt="観光地の検索機能"
                      width={120}
                      height={120}
                      className={styles.featureImage}
                    />
                  </div>
                  <p className={styles.featureName}>観光地の検索</p>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureImageWrap}>
                    <Image
                      src="/projects_img/tabitomo/thinkImg.png"
                      alt="旅のしおり作成機能"
                      width={120}
                      height={120}
                      className={styles.featureImage}
                    />
                  </div>
                  <p className={styles.featureName}>旅のしおり作成</p>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureImageWrap}>
                    <Image
                      src="/projects_img/tabitomo/noteImg.png"
                      alt="メモ機能"
                      width={120}
                      height={120}
                      className={styles.featureImage}
                    />
                  </div>
                  <p className={styles.featureName}>メモ機能</p>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureImageWrap}>
                    <Image
                      src="/projects_img/tabitomo/otherImg.png"
                      alt="その他の機能"
                      width={120}
                      height={120}
                      className={styles.featureImage}
                    />
                  </div>
                  <p className={styles.featureName}>その他の機能</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* スライド3: 観光地の検索 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <div className={styles.cardTitleWithIcon}>
                <Image
                  src="/projects_img/tabitomo/serchImg.png"
                  alt="観光地の検索アイコン"
                  width={36}
                  height={36}
                  className={styles.titleIcon}
                />
                <span>観光地の検索</span>
              </div>
            </h3>
            
            <div className={styles.cardContent}>
              <div className={styles.searchFeature}>
                <h4 className={styles.featureSubtitle}>通常検索</h4>
                <div className={styles.beforeAfter}>
                  <div className={styles.beforeAfterItem}>
                    <p className={styles.searchLabel}>「東京」と検索</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_search1.png"
                        alt="東京での検索入力画面"
                        width={400}
                        height={250}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.arrowContainer}>
                    <ArrowForward className={styles.arrowIcon} />
                  </div>
                  
                  <div className={styles.beforeAfterItem}>
                    <p className={styles.searchLabel}>検索結果</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_search2.png"
                        alt="東京での検索結果画面"
                        width={400}
                        height={250}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.searchFeature}>
                <h4 className={styles.featureSubtitle}>AIを使った抽象検索</h4>
                <div className={styles.beforeAfter}>
                  <div className={styles.beforeAfterItem}>
                    <p className={styles.searchLabel}>「桜が見たい」と検索</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_search3.png"
                        alt="桜が見たいでの検索入力画面"
                        width={400}
                        height={250}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.arrowContainer}>
                    <ArrowForward className={styles.arrowIcon} />
                  </div>
                  
                  <div className={styles.beforeAfterItem}>
                    <p className={styles.searchLabel}>検索結果</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_search4.png"
                        alt="桜が見たいでの検索結果画面"
                        width={400}
                        height={250}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* スライド4: 旅のしおり作成 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <div className={styles.cardTitleWithIcon}>
                <Image
                  src="/projects_img/tabitomo/thinkImg.png"
                  alt="旅のしおり作成アイコン"
                  width={36}
                  height={36}
                  className={styles.titleIcon}
                />
                <span>旅のしおり作成</span>
              </div>
            </h3>
            
            <div className={styles.cardContent}>
              <div className={styles.sioriStep}>
                <p className={styles.stepNumber}>Step 1</p>
                <p className={styles.stepTitle}>旅の基本情報を登録</p>
                <div className={styles.imageContainer}>
                  <Image
                    src="/projects_img/tabitomo/tabitomo_siori2.png"
                    alt="旅の基本情報登録画面"
                    width={600}
                    height={350}
                    className={styles.featureScreenshot}
                  />
                </div>
              </div>
              
              <div className={styles.sioriStep}>
                <p className={styles.stepNumber}>Step 2</p>
                <p className={styles.stepTitle}>登録した情報によって基盤を作成</p>
                <div className={styles.imageContainer}>
                  <Image
                    src="/projects_img/tabitomo/tabitomo_siori3.png"
                    alt="旅程基盤作成画面"
                    width={600}
                    height={350}
                    className={styles.featureScreenshot}
                  />
                </div>
              </div>
              
              <div className={styles.sioriStep}>
                <p className={styles.stepNumber}>Step 3</p>
                <p className={styles.stepTitle}>フィルターをかける</p>
                <div className={styles.beforeAfter}>
                  <div className={styles.beforeAfterItem}>
                    <p className={styles.searchLabel}>「山形県」でフィルター</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_siori3.png"
                        alt="フィルター前画面"
                        width={400}
                        height={250}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.arrowContainer}>
                    <ArrowForward className={styles.arrowIcon} />
                  </div>
                  
                  <div className={styles.beforeAfterItem}>
                    <p className={styles.searchLabel}>フィルター結果</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_siori4.png"
                        alt="フィルター後画面"
                        width={400}
                        height={250}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.sioriStep}>
                <p className={styles.stepNumber}>Step 4</p>
                <p className={styles.stepTitle}>日程ごとに予定を登録・確認</p>
                <div className={styles.imageContainer}>
                  <Image
                    src="/projects_img/tabitomo/tabitomo_siori5.png"
                    alt="日程ごとの予定登録画面"
                    width={600}
                    height={350}
                    className={styles.featureScreenshot}
                  />
                </div>
                <p className={styles.stepDescription}>
                  日程ごとに予定を登録でき、左上のボタンを押すと、日程ごとの登録情報を見ることができます。
                </p>
              </div>
              
              <div className={styles.sioriStep}>
                <p className={styles.stepNumber}>Step 5</p>
                <p className={styles.stepTitle}>しおりの登録と詳細表示</p>
                <div className={styles.sideBySide}>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/projects_img/tabitomo/tabitomo_siori6.png"
                      alt="しおり登録画面"
                      width={400}
                      height={250}
                      className={styles.featureScreenshot}
                    />
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/projects_img/tabitomo/tabitomo_siori7.png"
                      alt="しおり詳細表示画面"
                      width={400}
                      height={250}
                      className={styles.featureScreenshot}
                    />
                  </div>
                </div>
              </div>
              
              <div className={styles.sioriStep}>
                <p className={styles.stepNumber}>Step 6</p>
                <p className={styles.stepTitle}>お気に入りや完了、削除機能</p>
                <div className={styles.imageContainer}>
                  <Image
                    src="/projects_img/tabitomo/tabitomo_siori8.png"
                    alt="機能操作画面"
                    width={600}
                    height={350}
                    className={styles.featureScreenshot}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* スライド5: メモ機能 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <div className={styles.cardTitleWithIcon}>
                <Image
                  src="/projects_img/tabitomo/noteImg.png"
                  alt="メモ機能アイコン"
                  width={36}
                  height={36}
                  className={styles.titleIcon}
                />
                <span>メモ機能</span>
              </div>
            </h3>
            
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image
                  src="/projects_img/tabitomo/tabitomo_note1.png"
                  alt="メモ機能のメイン画面"
                  width={700}
                  height={400}
                  className={styles.featureScreenshot}
                />
              </div>
              
              <div className={styles.noteFeature}>
                <div className={styles.featurePoint}>
                  <p className={styles.pointTitle}>画像とテキストをユーザーの好きな順番で挿入、登録できるようにしました</p>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/projects_img/tabitomo/tabitomo_note2.png"
                      alt="メモ編集画面"
                      width={600}
                      height={350}
                      className={styles.featureScreenshot}
                    />
                  </div>
                </div>
                
                <div className={styles.featurePoint}>
                  <p className={styles.pointTitle}>お気に入りや完了、削除機能あり</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* スライド6: その他の機能 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <div className={styles.cardTitleWithIcon}>
                <Image
                  src="/projects_img/tabitomo/otherImg.png"
                  alt="その他の機能アイコン"
                  width={36}
                  height={36}
                  className={styles.titleIcon}
                />
                <span>その他の機能</span>
              </div>
            </h3>
            
            <div className={styles.cardContent}>
              <div className={styles.otherFeatureList}>
                {/* AI会話機能 */}
                <div className={styles.otherFeature}>
                  <h4 className={styles.otherFeatureTitle}>AIと一般的な会話</h4>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/projects_img/tabitomo/tabitomo_other1.png"
                      alt="AI会話機能画面"
                      width={600}
                      height={350}
                      className={styles.featureScreenshot}
                    />
                  </div>
                </div>
                
                {/* 架空観光地生成機能 */}
                <div className={styles.otherFeature}>
                  <h4 className={styles.otherFeatureTitle}>AIを使って架空の観光地を生成</h4>
                  
                  <div className={styles.generationStep}>
                    <p className={styles.generationStepText}>生成対象の都道府県とその数を設定</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_other2.png"
                        alt="観光地生成設定画面"
                        width={600}
                        height={350}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.generationStep}>
                    <p className={styles.generationStepText}>AIが自動的に観光地の情報を生成(架空)</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_other3.png"
                        alt="観光地情報生成結果画面"
                        width={600}
                        height={350}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.generationStep}>
                    <p className={styles.generationStepText}>AIが生成された観光地の情報をもとに画像を生成</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_other4.png"
                        alt="観光地画像生成結果画面"
                        width={600}
                        height={350}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                </div>
                
                {/* 認証機能 */}
                <div className={styles.otherFeature}>
                  <h4 className={styles.otherFeatureTitle}>認証機能</h4>
                  
                  <div className={styles.authGrid}>
                    <div className={styles.authItem}>
                      <p className={styles.authLabel}>ログイン</p>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/projects_img/tabitomo/tabitomo_other5.png"
                          alt="ログイン画面"
                          width={400}
                          height={250}
                          className={styles.featureScreenshot}
                        />
                      </div>
                    </div>
                    
                    <div className={styles.authItem}>
                      <p className={styles.authLabel}>サインアップ</p>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/projects_img/tabitomo/tabitomo_other6.png"
                          alt="サインアップ画面"
                          width={400}
                          height={250}
                          className={styles.featureScreenshot}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.authItem}>
                    <p className={styles.authLabel}>プロフィール設定</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src="/projects_img/tabitomo/tabitomo_other7.png"
                        alt="プロフィール設定画面"
                        width={600}
                        height={350}
                        className={styles.featureScreenshot}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* スライド7: 使用技術 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>使用技術</h3>
            <div className={styles.cardContent}>
              <div className={styles.techGrid}>
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>言語・フレームワーク</h4>
                  <ul className={styles.techList}>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Flask</li>
                    <li>FastAPI</li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>サービス</h4>
                  <ul className={styles.techList}>
                    <li>llama.cpp</li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>AIモデル</h4>
                  <ul className={styles.techList}>
                    <li>
                      DeepSeek R1 (テキスト生成)
                      <span className={styles.techLink}>https://huggingface.co/mmnga/DeepSeek-R1-Distill-Qwen-14B-gguf</span>
                    </li>
                    <li>
                      Stable Diffusion 2.1 (画像生成)
                      <span className={styles.techLink}>https://huggingface.co/stabilityai/stable-diffusion-2-1-base</span>
                    </li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>データベース</h4>
                  <ul className={styles.techList}>
                    <li>Supabase(PostgreSQL)</li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>ORM</h4>
                  <ul className={styles.techList}>
                    <li>Prisma</li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>SSH</h4>
                  <ul className={styles.techList}>
                    <li>Pythonのparamikoを利用</li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>VPN</h4>
                  <ul className={styles.techList}>
                    <li>Tailscale</li>
                  </ul>
                </div>
                
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>環境</h4>
                  <ul className={styles.techList}>
                    <li>Mac M2(メイン機能)</li>
                    <li>Ubuntu(Windows(WSL)、生成AIのモデルを実装、公開APIの設置)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* スライド8: 工夫点 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>今回のアプリの工夫</h3>
            <div className={styles.cardContent}>
              <div className={styles.ingenuityPoint}>
                <h4 className={styles.ingenuityTitle}>観光先を入手する</h4>
                <ul className={styles.ingenuityList}>
                  <li>→ネットの旅行サイトからのスクレイピングの許可が降りなかったため、自分で架空の観光先を作成することにした。</li>
                  <li>→その際にAIを利用し、すべて自動で作成できるようにする。</li>
                  <li>→また、ChatGPTなどの公開APIを利用するのは面白くないため、すべてローカル環境でAIを実装(モデルを動かす)しAPIを作成、SSHで他のデバイスから外出していてもAPIを叩けるようにした。</li>
                </ul>
              </div>
              
              <div className={styles.ingenuityPoint}>
                <h4 className={styles.ingenuityTitle}>観光先のおすすめもAIを利用</h4>
              </div>
              
              <div className={styles.ingenuityPoint}>
                <h4 className={styles.ingenuityTitle}>メモ機能</h4>
                <ul className={styles.ingenuityList}>
                  <li>→一般的なメモ機能は画像とテキストが分かれているため、特徴を出すため、テキストと画像を好きな順に並べられるようにした。</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* スライド9: 課題 */}
            <div className={styles.card}>
            <h3 className={styles.cardTitle}>課題</h3>
            <div className={styles.cardContent}>
                <div className={styles.challengePoint}>
                <h4 className={styles.challengeTitle}>
                    <span className={styles.challengeIcon}>🔍</span>
                    検索について
                </h4>
                <ul className={styles.challengeList}>
                    <li>AIを利用した検索では検索数を動的にできていない。また、検索数が増えると検索時間が長くなる問題がある。</li>
                    <li>キャッシュを導入していないため、検索時間の短縮につながっていない。</li>
                </ul>
                </div>
                
                <div className={styles.challengePoint}>
                <h4 className={styles.challengeTitle}>
                    <span className={styles.challengeIcon}>🔒</span>
                    トラフィック対策について
                </h4>
                <ul className={styles.challengeList}>
                    <li>高トラフィックに耐える設計をしていないため、同時多発的にアクセスやリクエストがあると機能停止する可能性がある。</li>
                    <li>同様にセキュリティに脆弱性がある可能性あり。</li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        <div className={styles.projectSummary}>
            <h2 className={styles.summaryTitle}>プロジェクトを終えて</h2>
            
            <div className={styles.summaryContent}>
                <div className={styles.summarySection}>
                <h3 className={styles.summarySectionTitle}>
                    <span className={styles.summaryIcon}>🚀</span>
                    技術的な挑戦と振り返り
                </h3>
                <p className={styles.summaryText}>
                    「たびとも」のハイ発では、主にローカル環境でのAIモデルの実装と別のデバイス、サーバーからのAPIアクセスを実現することが挑戦であり、課題でした。
                    また、レスポンスの速度や精度などを調整して、ユーザーに快適な体験を提供することにも課題でした。
                    開発初期はTailscaleというものを知らなかったため、同じルーターに接続してる環境からしかAPIを叩けないという制限がありました。
                    また、AIモデルを動かしているローカル環境はUbuntuであり、Windows内へのSSHになりました。初めての体験のため、ドキュメントや記事を参考にしながら、ポートフォワーディングを利用して、SSH接続を実現しました。
                    その後、Tailscaleを利用することで、どこからでもAPIを叩けるようになりました。
                </p>
                <p className={styles.summaryText}>
                    また、今回のプロジェクトや開発してる途中に目にした記事やインターン先の社員・同期の方々からのアドバイスなどから、
                    キャッシュ、Redis、アーキテクチャ、セキュリティ、トラフィック対策、などが足りていないと感じた。
                    そのため、今後のプロジェクトでは、これらの技術を取り入れ、より堅牢でスケーラブルなアプリケーションを目指していきたいと考えています。
                </p>
                </div>
                
                <div className={styles.futureGoals}>
                <h4 className={styles.futureTitle}>今後の学習</h4>
                <ul className={styles.goalsList}>
                    <li>キャッシュ機構の導入によるパフォーマンス向上</li>
                    <li>セキュリティ対策の強化</li>
                    <li>スケーラブルなアーキテクチャの設計</li>
                    <li>より強固なトラフィック対策</li>
                    <li>Redisを取り入れた環境</li>
                </ul>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}