import { create } from 'zustand';

interface Movie {
    id: number | null;
    title: string | null;
    releaseDate: string | null;
    posterPath: string | null;
}

interface MovieStore {
    movie: Movie | null;
    setSelectedMovie: (movie: Movie) => void;
    getSelectedMovie: () => Movie | null;
    clearSelectedMovie: () => void;
}

export const useSelectedMovieStore = create<MovieStore>((set, get) => ({
    movie: null,
    setSelectedMovie: (movie) => set({ movie }),
    getSelectedMovie: () => get().movie,
    clearSelectedMovie: () => set({ movie: null })
}));