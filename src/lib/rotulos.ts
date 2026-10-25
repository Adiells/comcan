import type { Canal, Categoria } from '../content/schema'

/** Rótulos de exibição em pt-BR. As chaves são os valores do schema (em inglês/neutro). */
export const ROTULO_CATEGORIA: Record<Categoria, string> = {
  streaming: 'Streaming',
  musica: 'Música',
  software: 'Software',
  jogos: 'Jogos',
  fitness: 'Fitness',
  noticias: 'Notícias',
  entregas: 'Entregas',
  telefonia: 'Telefonia',
  financeiro: 'Financeiro',
  outros: 'Outros',
}

export const ROTULO_CANAL: Record<Canal, string> = {
  site: 'Site',
  app: 'Aplicativo',
  telefone: 'Telefone',
  chat: 'Chat',
  email: 'E-mail',
  presencial: 'Presencial',
}

/** Datas de conteúdo são ISO (AAAA-MM-DD); fixamos meia-noite local para não deslocar o dia. */
export function formatarData(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}
