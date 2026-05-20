import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FadeInView from './FadeInView'
import { fetchLatestNews, getNewsHistory } from '../services/newsService'

const staticArticles = [
  {
    key: 'cybersecurity1',
    category: 'cybersecurity',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'ai1',
    category: 'ai',
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'dev1',
    category: 'development',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'cybersecurity2',
    category: 'cybersecurity',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'ai2',
    category: 'ai',
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'dev2',
    category: 'development',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'cybersecurity3',
    category: 'cybersecurity',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'ai3',
    category: 'ai',
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'dev3',
    category: 'development',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'cybersecurity4',
    category: 'cybersecurity',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'ai4',
    category: 'ai',
    color: '#22C55E',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
  },
  {
    key: 'dev4',
    category: 'development',
    color: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
  },
]

function BlogPage() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [liveArticles, setLiveArticles] = useState([])
  const [historyArticles, setHistoryArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const filters = [
    { key: 'all', label: t('blogPage.categories.all') },
    { key: 'cybersecurity', label: t('blogPage.categories.cybersecurity') },
    { key: 'ai', label: t('blogPage.categories.ai') },
    { key: 'development', label: t('blogPage.categories.development') },
  ]

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true)
      const history = getNewsHistory()
      setHistoryArticles(history)
      try {
        const articles = await fetchLatestNews()
        setLiveArticles(articles)
      } catch {}
      setIsLoading(false)
    }
    loadNews()
  }, [])

  const filteredStatic = staticArticles.filter(a => activeFilter === 'all' || a.category === activeFilter)
  const filteredLive = liveArticles.filter(a => activeFilter === 'all' || a.category === activeFilter)
  const filteredHistory = historyArticles.filter(a => activeFilter === 'all' || a.category === activeFilter)

  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 sm:pt-32 pb-12 sm:pb-20"
      >
        <div className="section-container">
          <FadeInView>
            <span className="text-[#0071E3] font-semibold tracking-wide uppercase text-sm mb-4 block">
              {t('blogPage.badge')}
            </span>
            <h1 className="text-[3rem] sm:text-[5rem] font-semibold tracking-tight text-white mb-6 leading-[1]">
              {t('blogPage.title')}
            </h1>
            <p className="text-lg sm:text-xl text-[#86868B] max-w-2xl mb-12">
              {t('blogPage.subtitle')}
            </p>
          </FadeInView>

          <FadeInView>
            <div className="flex flex-wrap gap-3 mb-16">
              {filters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeFilter === f.key
                      ? 'bg-[#0071E3] border-[#0071E3] text-white'
                      : 'bg-white/[0.02] border-white/[0.06] text-white/60 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeInView>

          {filteredLive.length > 0 && (
            <div className="mb-20">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-8">{t('blogPage.liveNews')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLive.map((article, i) => (
                  <FadeInView key={article.url || i} delay={i * 0.08}>
                    <div className="group rounded-3xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 overflow-hidden">
                      {article.image && (
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="block aspect-[16/9] overflow-hidden">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </a>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border"
                            style={{ color: article.color, backgroundColor: `${article.color}10`, borderColor: `${article.color}20` }}
                          >
                            {t(`blogPage.categories.${article.category}`)}
                          </span>
                          <span className="text-[10px] text-white/30">{article.source}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#0071E3] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-[#86868B] line-clamp-3">{article.excerpt}</p>
                        {article.url && (
                          <a href={article.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Ver artículo
                          </a>
                        )}
                        <div className="flex items-center gap-2 mt-3 text-white/30 text-xs">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-white/10 border-t-[#0071E3] rounded-full animate-spin" />
            </div>
          )}

          <div className="mb-20">
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-8">{t('blogPage.ourArticles')}</h3>
            <div className="space-y-10 sm:space-y-20">
              {filteredStatic.map((article, index) => (
                <FadeInView key={article.key} delay={index * 0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={`${index % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="rounded-3xl overflow-hidden aspect-[16/10]" style={{ boxShadow: `0 25px 60px -15px ${article.color}15` }}>
                        <img src={article.image} alt={t(`blogPage.articles.${article.key}.title`)}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                    <div className={`${index % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium border"
                          style={{ color: article.color, backgroundColor: `${article.color}10`, borderColor: `${article.color}20` }}
                        >
                          {t(`blogPage.categories.${article.category}`)}
                        </span>
                        <span className="text-xs text-white/30">{t(`blogPage.articles.${article.key}.date`)}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 leading-tight">
                        {t(`blogPage.articles.${article.key}.title`)}
                      </h2>
                      <p className="text-[#86868B] leading-relaxed mb-4">{t(`blogPage.articles.${article.key}.excerpt`)}</p>
                      <p className="text-[#86868B] leading-relaxed mb-6 text-sm">{t(`blogPage.articles.${article.key}.content`)}</p>
                      <div className="flex items-center gap-3 text-white/40 text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t(`blogPage.articles.${article.key}.readTime`)}</span>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

          {filteredHistory.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-8">{t('blogPage.history')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredHistory.slice(0, 12).map((article, i) => (
                  <FadeInView key={`${article.url}-${i}`} delay={i * 0.05}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer"
                      className="group block p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: article.color }} />
                        <span className="text-[10px] text-white/30">{article.source} · {article.date}</span>
                      </div>
                      <h4 className="text-sm font-medium text-white/80 line-clamp-3 group-hover:text-white transition-colors">
                        {article.title}
                      </h4>
                    </a>
                  </FadeInView>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default BlogPage
