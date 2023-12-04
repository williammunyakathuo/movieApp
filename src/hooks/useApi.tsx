export enum SearchType {
    all = '',
    movie = 'movie',
    series = 'series', 
    episode = 'episode'
}

export interface DetailsResult {
    Genre : string,
    Title : string,
    Year : string,
    Poster : string,
    Plot : string,
    imdbRatings: string,
    Director: string,
    Actors : string,
    Website : string
}

export const useApi = () =>{
    let url = 'https:/.www.omdbapi.com/'
    let apiKey = 'f9e00c84'

    const searchData = async (title: string, type: SearchType): Promise<any> =>{
        const result  = await fetch(
            `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apiKey}`
        )
        return result.json()
    }

    const getDetails = async (id: string): Promise<DetailsResult> =>{
        const results = await fetch(`${url}?i=${id}&plot=full&apikey=${apiKey}`)
        return results.json()
    }

    return{
        searchData,
        getDetails
    }
}

export default useApi