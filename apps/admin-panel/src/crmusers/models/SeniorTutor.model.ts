import { CRMUserModel } from './CRMUser.model';
import { prop } from '@typegoose/typegoose';
import { AccountTypes } from '../types/AccountTypes';

export class SeniorTutorModel extends CRMUserModel {
    @prop({ type: () => String, default: AccountTypes.SeniorTutor })
    accountType: string;
}
