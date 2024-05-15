import { Kwmlist } from "./kwmlist";

export class KwmlistFactory {
    static empty() :Kwmlist {
        return new Kwmlist(0, '', false, [{id: 0, title: '', text: '', image_url: '', kwmlist_id: 0}]);
    }

    static fromObject (rawKwmlist: any) : Kwmlist {
        return new Kwmlist (
            rawKwmlist.id,
            rawKwmlist.name,
            rawKwmlist.is_shared, 
            rawKwmlist.notes
        )
    }
}
