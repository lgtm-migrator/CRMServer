import {
    IsEnum,
    IsNotEmpty,
    IsString,
    IsMongoId,
    IsOptional
} from 'class-validator';
import { AccountTypes } from '../models/AccountTypes';
import { ActionPermissions } from '../../roles/models/ActionPermissions';
import { DataPermissions } from '../../roles/models/DataPermissions';

export class UpdateCRMUserDTO {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    surname: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    midname: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    login: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsNotEmpty()
    @IsMongoId()
    role: string;

    @IsOptional()
    @IsEnum(ActionPermissions, { each: true })
    localActionPermissions: ActionPermissions[];

    @IsOptional()
    @IsEnum(DataPermissions, { each: true })
    localDataPermissions: DataPermissions[];

    @IsOptional()
    @IsEnum(AccountTypes)
    accountType: AccountTypes;
}