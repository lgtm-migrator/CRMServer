import CRMUser from 'src/crmaccounts/models/CRMUser.model';
import Pupil from '../../pupils/models/Pupil.model';
import { prop } from '@typegoose/typegoose';
import { Schedule } from './Schedule';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class Group extends TimeStamps {
    @prop({ type: String, required: true })
    GROUP_NAME: string;

    @prop({ type: Number, required: true })
    PLACES: number;

    @prop({ type: Number, required: true })
    LEVEL: number;

    @prop({
        type: String,
        ref: () => CRMUser,
        required: false,
        default: null
    })
    TUTOR: string | null;

    @prop({ type: Array, ref: () => Pupil, required: false, default: [] })
    PUPILS: string[];

    @prop({ type: () => [Schedule], required: false, _id: false })
    GLOBAL_SCHEDULE: Schedule[];

    public deletePupil(id: string): void {
        this.PUPILS.splice(this.PUPILS.indexOf(id), 1);
    }

    public addPupils(ids: string[]): void {
        this.PUPILS = [...new Set<string>(this.PUPILS.concat(ids))];
    }
}
