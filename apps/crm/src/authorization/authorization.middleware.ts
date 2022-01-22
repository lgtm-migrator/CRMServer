import { CRMUserModel } from '../../../admin-panel/src/crmusers/models/CRMUser.model';
import { ExtendedRequest } from './ExtendedRequest';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { JwtService } from '@nestjs/jwt';
import { PopulateOptions } from 'mongoose';
import { Response } from 'express';
import { ReturnModelType } from '@typegoose/typegoose';
import { RoleModel } from '../../../admin-panel/src/roles/models/Role.model';
import { TokenPayload } from '../authentication/types/TokenPayload';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
    constructor(
        private readonly jwtService: JwtService,
        @InjectModel(CRMUserModel)
        private readonly crmUserModel: ReturnModelType<typeof CRMUserModel>
    ) {}

    async use(req: ExtendedRequest, res: Response, next: () => void) {
        const token = req.headers?.authorization?.split(' ')[1];

        if (!token) return res.sendStatus(401);

        try {
            const { id, login, accountType, name, surname, midname } =
                await this.jwtService.verifyAsync<TokenPayload>(token);

            const user = await this.crmUserModel
                .findOne({
                    _id: id,
                    login,
                    accountType,
                    name,
                    surname,
                    midname
                })
                .populate({
                    path: 'role',
                    model: RoleModel
                } as PopulateOptions);

            if (!user) return res.sendStatus(401);

            req.user = user;

            next();
        } catch (err) {
            return res.sendStatus(401);
        }
    }
}
