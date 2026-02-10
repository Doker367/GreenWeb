import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * useDecipherText — Hook que produce un efecto de descifrado caracter por caracter.
 * 
 * Los caracteres empiezan como símbolos aleatorios y se "resuelven" secuencialmente
 * hacia el texto final, produciendo un efecto matrix/hacker elegante.
 *
 * @param {string} finalText - El texto objetivo a revelar
 * @param {object} options
 * @param {number} options.scrambleDuration - ms totales del efecto de scramble (default 2000)
 * @param {number} options.revealStagger - ms entre cada caracter revelado (default 40)
 * @param {number} options.scrambleSpeed - ms entre cambios de caracteres aleatorios (default 50)
 * @param {number} options.startDelay - delay antes de empezar (default 0)
 * @param {boolean} options.trigger - si es true inicia la animación (default true)
 * @returns {{ displayText: string, isComplete: boolean }}
 */
const CIPHER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]=/\\|~^'

function useDecipherText(finalText, {
  scrambleDuration = 1800,
  revealStagger = 35,
  scrambleSpeed = 45,
  startDelay = 0,
  trigger = true,
} = {}) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)
  const rafRef = useRef(null)

  const getRandomChar = useCallback(() => {
    return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)]
  }, [])

  useEffect(() => {
    if (!trigger || !finalText) {
      setDisplayText('')
      setIsComplete(false)
      return
    }

    const chars = finalText.split('')
    const totalChars = chars.length
    let revealedCount = 0
    let isScrambling = true

    // Fase 1: scramble puro — todos los caracteres cambian aleatoriamente
    const scramble = () => {
      const result = chars.map((char, i) => {
        if (char === ' ') return ' '
        if (i < revealedCount) return char
        return getRandomChar()
      })
      setDisplayText(result.join(''))
    }

    // Empezar el scramble después del delay
    timeoutRef.current = setTimeout(() => {
      // Scramble interval
      intervalRef.current = setInterval(() => {
        if (isScrambling) {
          scramble()
        }
      }, scrambleSpeed)

      // Fase 2: resolver caracter por caracter después de scrambleDuration
      const revealTimeout = setTimeout(() => {
        const revealInterval = setInterval(() => {
          revealedCount++
          // Skip spaces
          while (revealedCount < totalChars && chars[revealedCount] === ' ') {
            revealedCount++
          }

          if (revealedCount >= totalChars) {
            clearInterval(revealInterval)
            clearInterval(intervalRef.current)
            setDisplayText(finalText)
            setIsComplete(true)
            isScrambling = false
          }
        }, revealStagger)

        return () => clearInterval(revealInterval)
      }, scrambleDuration)

      return () => clearTimeout(revealTimeout)
    }, startDelay)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [finalText, scrambleDuration, revealStagger, scrambleSpeed, startDelay, trigger, getRandomChar])

  return { displayText, isComplete }
}

export default useDecipherText
