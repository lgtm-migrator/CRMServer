import { ActionRights } from '../rights/ActionRights';
import { DataRights } from '../rights/DataRights';
import { modelOptions, prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({ schemaOptions: { collection: 'Roles' } })
export class RoleModel {
    @ApiProperty()
    @prop({ type: () => String, required: true })
    name: string;

    @ApiProperty({ enum: () => ActionRights, isArray: true })
    @prop({
        type: () => [String],
        enum: () => [ActionRights],
        required: true
    })
    actionRights: string[] | ActionRights[];

    @ApiProperty({ enum: () => DataRights, isArray: true })
    @prop({
        type: () => [String],
        enum: () => [DataRights],
        required: true
    })
    dataRights: string[] | DataRights[];
}
