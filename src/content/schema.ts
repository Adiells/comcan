import { z } from 'zod'

export const CATEGORIAS = [
  'streaming',
  'musica',
  'software',
  'jogos',
  'fitness',
  'noticias',
  'entregas',
  'telefonia',
  'financeiro',
  'outros',
] as const

export const CANAIS = ['site', 'app', 'telefone', 'chat', 'email', 'presencial'] as const

export const DIFICULDADES = ['facil', 'media', 'dificil'] as const

export const ROTULO_DIFICULDADE: Record<Dificuldade, string> = {
  facil: 'Fácil',
  media: 'Média',
  dificil: 'Difícil',
}

export type Categoria = (typeof CATEGORIAS)[number]
export type Canal = (typeof CANAIS)[number]
export type Dificuldade = (typeof DIFICULDADES)[number]

const texto = z.string().trim().min(1)

export const guideSchema = z.object({
  /** Deve ser idêntico ao nome do arquivo, sem `.json`. */
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'use kebab-case, ex: "prime-video"'),
  nome: texto,
  categoria: z.enum(CATEGORIAS),
  /** Usado como meta description: mantenha entre 10 e 160 caracteres. */
  resumo: z.string().trim().min(10).max(160),
  siteUrl: z.url(),
  dificuldade: z.enum(DIFICULDADES),
  canais: z.array(z.enum(CANAIS)).min(1),
  /** Como o serviço tenta segurar o cliente (descontos, pausas, retenção). */
  retencao: texto,
  requisitos: z.array(texto).default([]),
  passos: z
    .array(
      z.object({
        titulo: texto,
        detalhe: texto,
        /** Caminhos que dão errado com frequência. */
        aviso: texto.optional(),
      }),
    )
    .min(1),
  aposCancelar: z.array(texto).default([]),
  alternativas: z
    .array(z.object({ nome: texto, url: z.url().optional(), motivo: texto.optional() }))
    .default([]),
  /** Toda afirmação factual precisa de uma fonte oficial. */
  fontes: z.array(z.object({ titulo: texto, url: z.url() })).min(1),
  /** Data ISO (AAAA-MM-DD) da última verificação do fluxo no site oficial. */
  verificadoEm: z.iso.date(),
})

export type Guide = z.infer<typeof guideSchema>
export type Passo = Guide['passos'][number]
