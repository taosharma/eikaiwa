import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import ArticleBannerImage from '../../components/ArticleBannerImage'
import DescriptionText from '../../components/DescriptionText'
import Sidebar from '../../components/Sidebar'

import styles from './index.module.css'

export default function Article({ currentArticle, handleCurrentArticle }) {
  const [article, setArticle] = useState(currentArticle)
  const [markdown, setMarkdown] = useState('')

  const { id, slug, articleLink, titles, description, coverImage } = article

  const { pageId } = useParams()

  async function getMarkdown() {
    const response = await fetch(articleLink)
    const text = await response.text()
    setMarkdown(text)
  }

  useEffect(() => {
    getMarkdown()
  }, [])

  useEffect(() => {
    if (id !== pageId) {
      handleCurrentArticle(pageId)
      setArticle(currentArticle)
    }
  }, [article, currentArticle, handleCurrentArticle, id, pageId])

  return (
    <>
      <ArticleBannerImage
        titleText={titles.english}
        titleTextColour={'white'}
        secondaryTitleText={titles.japanese}
        secondaryTitleTextColour={'white'}
      />
      <main className={styles.mainContainer}>
        <section className={styles.contentContainer}>
          <ReactMarkdown children={markdown} rehypePlugins={[rehypeRaw]} />
          <DescriptionText textArray={description} />
        </section>
        <section className={styles.sidebarContainer}>
          <Sidebar />
        </section>
      </main>
    </>
  )
}

Article.defaultProps = {
  article: {
    id: '0',
    titles: {
      english: 'Alice In Wonderland',
      japanese: '不思議の国のアリス',
    },
    date: '2023 年 1 月 12 日',
    coverImage: {
      link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdni.fancaps.net%2Ffile%2Ffancaps-movieimages%2F95664.jpg&f=1&nofb=1&ipt=0c65a938750b024af4623f77dc857f7a07e77c69363fe5153c19def38ff764d0&ipo=images',
      alt: 'Alice in Wonderland',
    },
    thumbnailImage: {
      link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdni.fancaps.net%2Ffile%2Ffancaps-movieimages%2F95664.jpg&f=1&nofb=1&ipt=0c65a938750b024af4623f77dc857f7a07e77c69363fe5153c19def38ff764d0&ipo=images',
      alt: 'Alice in Wonderland',
    },
    description:
      'ディズニーの不思議の国のアリスの有名なワンシーンです。アリスが悩みについて話しているけど、マッドハッター達が紅茶を入れたいです。繰り返しがたくさんあり、単語の簡単な楽しいシナリオです。アフタヌーンティーを馳走しながら読んでみましょう',
    article:
      "Mad Hatter: And now, my dear, something seems to be troubling you. Uh, won't you tell us all about it?",
    tags: ['Books', 'Films', 'Dialogue'],
    level: 'Beginner',
    categories: [{ category: 'Culture', isFeatured: true }],
    audioLink: '',
    vocab: {
      english: ['Alice', 'wonderland'],
      japanese: ['アリス', '不思議の国'],
    },
    comments: [{}],
  },
}
