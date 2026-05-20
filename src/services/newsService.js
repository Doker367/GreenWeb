const STORAGE_KEY = 'ga_news_history'
const MAX_HISTORY = 100
const CACHE_DURATION = 30 * 60 * 1000

const topics = [
  { key: 'cybersecurity', query: 'cybersecurity OR ciberseguridad', color: '#EF4444' },
  { key: 'ai', query: 'artificial intelligence OR inteligencia artificial OR IA', color: '#22C55E' },
  { key: 'development', query: 'software development OR desarrollo de software OR programming', color: '#3B82F6' },
]

function getCache() {
  try {
    const raw = localStorage.getItem('ga_news_cache')
    if (!raw) return null
    const cache = JSON.parse(raw)
    if (Date.now() - cache.timestamp > CACHE_DURATION) return null
    return cache.articles
  } catch {
    return null
  }
}

function setCache(articles) {
  try {
    localStorage.setItem('ga_news_cache', JSON.stringify({ articles, timestamp: Date.now() }))
  } catch {}
}

function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveToHistory(newArticles) {
  const existing = getHistory()
  const existingUrls = new Set(existing.map(a => a.url))
  const unique = newArticles.filter(a => !existingUrls.has(a.url))
  const merged = [...unique, ...existing].slice(0, MAX_HISTORY)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch {}
  return merged
}

async function fetchFromGNews(topic) {
  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY
  if (!API_KEY) return []

  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${encodeURIComponent(topic.query)}&lang=es&max=10&token=${API_KEY}`
    )
    if (!res.ok) return []
    const data = await res.json()
    return (data.articles || []).map(a => ({
      title: a.title,
      excerpt: a.description || '',
      content: a.content || a.description || '',
      image: a.image,
      url: a.url,
      source: a.source?.name || 'GNews',
      date: a.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
      category: topic.key,
      color: topic.color,
      isExternal: true,
    }))
  } catch {
    return []
  }
}

async function fetchFromNewsData(topic) {
  const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY
  if (!API_KEY) return []

  try {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${encodeURIComponent(topic.query)}&language=es`
    )
    if (!res.ok) return []
    const data = await res.json()
    return (data.results || []).map(a => ({
      title: a.title,
      excerpt: a.description || '',
      content: a.content || a.description || '',
      image: a.image_url,
      url: a.link,
      source: a.source_id || 'NewsData',
      date: a.pubDate?.split(' ')[0] || new Date().toISOString().split('T')[0],
      category: topic.key,
      color: topic.color,
      isExternal: true,
    }))
  } catch {
    return []
  }
}

export async function fetchLatestNews() {
  const cached = getCache()
  if (cached) return cached

  let allArticles = []

  for (const topic of topics) {
    let articles = await fetchFromGNews(topic)
    if (articles.length === 0) {
      articles = await fetchFromNewsData(topic)
    }
    allArticles = [...allArticles, ...articles]
  }

  if (allArticles.length > 0) {
    saveToHistory(allArticles)
  }

  const history = getHistory()
  const merged = [...allArticles]
  const urls = new Set(merged.map(a => a.url))
  history.forEach(a => {
    if (!urls.has(a.url)) {
      merged.push(a)
    }
  })

  setCache(merged)
  return merged
}

export function getNewsHistory() {
  return getHistory()
}

export function clearNewsHistory() {
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem('ga_news_cache')
}
