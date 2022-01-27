import {
    BadRequestException,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { PasswordProtectorService } from '../password-protector/password-protector.service';
import { ManagerModel } from '../../models/Manager.model';
import { UpdateManagerDTO } from '../../DTO/Manager/UpdateManagerDTO';
import { CreateManagerDTO } from '../../DTO/Manager/CreateManagerDTO';

@Injectable()
export class ManagersService {
    constructor(
        @InjectModel(ManagerModel)
        private readonly managerModel: ReturnModelType<typeof ManagerModel>,
        private readonly passwordProtector: PasswordProtectorService
    ) {}

    async create(createAdminDTO: CreateManagerDTO): Promise<ManagerModel> {
        createAdminDTO.password = await this.passwordProtector.hash(
            createAdminDTO.password
        );

        try {
            const user = await this.managerModel.create(CreateManagerDTO);
            return this.managerModel.findById(user.id);
        } catch (e) {
            throw new BadRequestException('User with this login exists');
        }
    }

    async get(
        limit: number,
        offset: number
    ): Promise<{ count: number; docs: ManagerModel[] }> {
        return {
            count: await this.managerModel.countDocuments().exec(),
            docs: await this.managerModel.find().skip(offset).limit(limit)
        };
    }

    async getByID(id: string): Promise<ManagerModel> {
        const found = await this.managerModel.findById(id);

        if (!found) {
            throw new NotFoundException();
        }

        return found;
    }

    async update(
        id: string,
        updateManagerDTO: UpdateManagerDTO
    ): Promise<ManagerModel> {
        const updated = this.managerModel.findByIdAndUpdate(
            id,
            updateManagerDTO
        );

        if (!updated) {
            throw new NotFoundException();
        }

        return this.managerModel.findById(id);
    }

    async delete(id: string): Promise<ManagerModel> {
        const deleted = this.managerModel.findByIdAndDelete(id);

        if (!deleted) {
            throw new NotFoundException();
        }

        return deleted;
    }
}