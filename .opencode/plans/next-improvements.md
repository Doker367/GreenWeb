# Plan: 4 Mejoras GreenWeb

## Tarea 1: Fix ServicesPage CTA [CRITICO]

### ServicesPage.jsx
- Linea 48: cambiar `function ServicesPage()` → `function ServicesPage({ onNavigate })`
- Linea 176: cambiar el onClick del CTA de:
  ```jsx
  onClick={(e) => { e.preventDefault(); onBack(); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }, 300) }}
  ```
  a:
  ```jsx
  onClick={(e) => { e.preventDefault(); onNavigate('home'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }, 500) }}
  ```

### App.jsx
- Linea 63: cambiar `{view === 'services' && <ServicesPage />}` → `{view === 'services' && <ServicesPage onNavigate={navigateTo} />}`

---

## Tarea 2: Code Splitting

### App.jsx
Reemplazar imports estaticos con React.lazy:

```jsx
import { useEffect, useState, lazy, Suspense } from 'react'
// ... imports normales para componentes del home ...
import PageLoader from './components/PageLoader'

const WorkPage = lazy(() => import('./components/WorkPage'))
const ServicesPage = lazy(() => import('./components/ServicesPage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const BlogPage = lazy(() => import('./components/BlogPage'))
```

Agregar Suspense wrapper para las paginas lazy:

```jsx
<Suspense fallback={<PageFallback />}>
  {view === 'work' && <WorkPage onNavigate={navigateTo} />}
  {view === 'services' && <ServicesPage onNavigate={navigateTo} />}
  {view === 'about' && <AboutPage onNavigate={navigateTo} />}
  {view === 'blog' && <BlogPage onNavigate={navigateTo} />}
</Suspense>
```

Crear componente PageFallback simple:
```jsx
function PageFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#0071E3] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
```

### vite.config.js
Agregar framer-motion al manualChunks:
```js
manualChunks: {
  'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
  'motion-vendor': ['framer-motion'],
},
```

### Paginas que necesitan prop onNavigate
Verificar cada pagina y agregar `onNavigate` prop donde se necesite navegacion:
- WorkPage.jsx - no usa navegacion interna, pero pasar por consistencia
- ServicesPage.jsx - YA se agrega en Tarea 1
- AboutPage.jsx - verificar si tiene CTAs que naveguen
- BlogPage.jsx - verificar si tiene CTAs que naveguen

---

## Tarea 3: SEO Restante

### Verificar existencia de archivos
- `/public/og-image.jpg` (1200x630)
- `/public/twitter-image.jpg` (1200x630)
- `/public/apple-touch-icon.png` (180x180)
- `/public/favicon-32x32.png`
- `/public/favicon-16x16.png`
- `/public/site.webmanifest`
- `/public/logo.png`

### Crear sitemap.xml en /public
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://greenalgorithm.com.mx/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Crear robots.txt en /public
```
User-agent: *
Allow: /
Sitemap: https://greenalgorithm.com.mx/sitemap.xml
```

### Actualizar Schema.org en index.html
- Linea 109: Cambiar telefono a numero real (pedir al usuario)
- Verificar URLs de redes sociales

---

## Tarea 4: Responsive Fixes

### 4a. CRITICOS

#### Portfolio.jsx:326
```
grid grid-cols-3 gap-4 mb-8
→ grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8
```

#### WorkPage.jsx:123
```
grid grid-cols-3 gap-4 mb-8
→ grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8
```

#### WhyGreenAlgorithm.jsx (lineas 12, 19, 26)
```
text-[3rem] → text-[2rem] sm:text-[2.5rem] md:text-[3rem]
```

#### Hero.jsx:34
```
-mt-52 → -mt-24 sm:-mt-40 lg:-mt-52
```

#### Hero.jsx:20
```
min-h-[120vh] → min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh]
```

### 4b. MODERADOS

#### py-32 → py-20 sm:py-32 en TODOS estos archivos:
- Stats.jsx:24
- TechStack.jsx:147
- Process.jsx:56
- Testimonials.jsx:74
- FAQ.jsx:12
- ContactSection.jsx:107
- About.jsx:57
- Services.jsx:69
- CallToAction.jsx:18
- Team.jsx:80
- WhyGreenAlgorithm.jsx

#### pt-32 pb-20 → pt-24 sm:pt-32 pb-12 sm:pb-20 en:
- WorkPage.jsx:50
- ServicesPage.jsx:60
- AboutPage.jsx:40
- BlogPage.jsx:121

#### Gaps excesivos:
- About.jsx:59: `gap-20 lg:gap-32` → `gap-10 sm:gap-16 lg:gap-32`
- WorkPage.jsx:65: `space-y-32` → `space-y-16 sm:space-y-32`
- AboutPage.jsx:59: `mb-24` → `mb-12 sm:mb-24`
- AboutPage.jsx:106: `mb-20` → `mb-10 sm:mb-20`
- AboutPage.jsx:138: `pt-20` → `pt-10 sm:pt-20`
- BlogPage.jsx:203: `space-y-20` → `space-y-10 sm:space-y-20`

#### CallToAction.jsx:
- Linea 32: `p-12 sm:p-16` → `p-6 sm:p-12 lg:p-16`
- Linea 42: `text-xl` → `text-base sm:text-xl`

#### TechStack.jsx gradientes (lineas 172-173):
```
w-32 → w-8 sm:w-16 lg:w-32
```

#### Stats.jsx:
- Linea 50: `text-[3.5rem] sm:text-[4.5rem]` → `text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem]`
- Linea 40: `text-xl` → `text-lg sm:text-xl`

### 4c. MENORES

#### Texto grande sin reduccion movil:
- BlogPage.jsx:131: `text-xl` → `text-lg sm:text-xl`

#### Navbar.jsx:67 - Logo tamaño:
```
h-14 w-14 sm:h-16 sm:w-16 → h-10 w-10 sm:h-14 sm:w-14
```

#### WorkPage.jsx:115 - Titulos de proyecto:
```
text-[2.5rem] sm:text-[3.5rem] → text-[1.75rem] sm:text-[2.5rem] lg:text-[3.5rem]
```

---

## Notas de Implementacion
- Ejecutar tareas en orden: 1 → 2 → 3 → 4a → 4b → 4c
- Despues de cada cambio verificar que el build pase
- Pasar onNavigate a TODAS las paginas (WorkPage, ServicesPage, AboutPage, BlogPage)
- Verificar que AboutPage y BlogPage no tengan CTAs rotos similares al de ServicesPage
