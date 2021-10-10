import { TaskTypes } from './TaskTypes';
import { prop } from '@typegoose/typegoose';
import CRMUser from '../../../../../admin-panel/src/crmaccounts/models/CRMUser.model';
import Pupil from '../../pupils/models/Pupil.model';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class Task extends TimeStamps {
    @prop({ type: String, required: true })
    name: string;

    @prop({ type: CRMUser, ref: () => CRMUser, required: true })
    responsible: string;

    @prop({ type: Pupil, ref: () => Pupil, required: true })
    for: string;

    @prop({ type: Date, required: true })
    deadline: string;

    @prop({ type: String })
    text: string;

    @prop({ type: Number, enum: TaskTypes, default: null })
    type: TaskTypes;

    @prop({ type: Boolean, default: false })
    done: boolean;
}