import {api} from './config'

export const getCharacters = async () => {
    try {
        const response = await api.get('/characters',{
            params: {
                limit: 20, // Puedes ajustar el límite según tus necesidades

            }
        });

        return response.data.data.results.filter((characters)=> {
            const thumbnail = characters.thumbnail;
            return (thumbnail && !thumbnail.path.includes('image_not_available') && !thumbnail.path.includes('4c002e0305708'));
        });
    
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}

