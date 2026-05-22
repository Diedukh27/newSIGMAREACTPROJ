export interface IMovieCreate {
    title: string,
    slug: string,
    description: string,
    genreIds: number[],
    imdbRating: string,
    releaseDate: string,
    image: File | null
    video: File | null
    trailerUrl: string,
}