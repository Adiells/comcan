import { useEffect, type RefObject } from 'react'

/** Atalho de teclado para focar no campo de busca ao pressionar a tecla '/'. */
export function useAtalhoBusca(inputRef: RefObject<HTMLInputElement | null>): void {
  useEffect(() => {
    function aoPressionarTecla(evento: KeyboardEvent) {
      if (evento.key !== '/') return

      const elementoAtivo = document.activeElement
      const tag = elementoAtivo?.tagName?.toLowerCase()
      if (
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        (elementoAtivo as HTMLElement)?.isContentEditable
      ) {
        return
      }

      evento.preventDefault()
      inputRef.current?.focus()
    }

    window.addEventListener('keydown', aoPressionarTecla)
    return () => {
      window.removeEventListener('keydown', aoPressionarTecla)
    }
  }, [inputRef])
}
