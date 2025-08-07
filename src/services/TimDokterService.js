import TimDokterRepository from "../repositories/TimDokterRepository";

export default {
    async fetchTimDokter() {
        const data = await TimDokterRepository.getAllDokter();

        return{
            title: data.title,
            description: data.description,
            timDokter: data.timDokter
        }
    }    
}