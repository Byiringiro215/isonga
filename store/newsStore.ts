import { create } from 'zustand'

// TypeScript Interfaces
export interface NewsCard {
  id: number
  image?:string,
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    avatar: string
  }
}

export interface EventCard {
  id: number
  date: string
  title: string
  description: string
  image: string
}

export interface CompetitionCard {
  id: number
  title: string
  description: string
  program: string
  date: string
  image: string
}

export interface UpcomingCompetition {
  id: number
  title: string
  date: string
  location: string
}

// Store interface
interface NewsStore {
  // Selected card data
  selectedNewsCard: NewsCard | null
  selectedEventCard: EventCard | null
  
  // Actions
  setSelectedNewsCard: (card: NewsCard | null) => void
  setSelectedEventCard: (card: EventCard | null) => void
  clearSelectedCards: () => void
}

// Create the store
export const useNewsStore = create<NewsStore>((set) => ({
  // Initial state
  selectedNewsCard: null,
  selectedEventCard: null,
  
  // Actions
  setSelectedNewsCard: (card) => set({ selectedNewsCard: card }),
  setSelectedEventCard: (card) => set({ selectedEventCard: card }),
  clearSelectedCards: () => set({ selectedNewsCard: null, selectedEventCard: null })
})) 