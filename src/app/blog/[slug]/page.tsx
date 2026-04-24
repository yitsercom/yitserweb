import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '../posts'
import BlogPostClient from './post-client'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yitser.com/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    alternates: { canonical: `https://yitser.com/blog/${post.slug}` },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' },
    publisher: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' },
    keywords: Array.isArray(post.keywords) ? post.keywords.join(', ') : '',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BlogPostClient post={post} />
    </>
  )
}
