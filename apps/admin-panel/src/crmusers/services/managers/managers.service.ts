import {
    BadRequestException,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { PasswordProtectorService } from '../password-protector/password-protector.service';
import { ManagerModel } from '../../models/manager.model';
import { UpdateManagerDto } from '../../dto/Manager/update-manager.dto';
import { CreateManagerDto } from '../../dto/Manager/create-manager.dto';

@Injectable()
export class ManagersService {
    constructor(
        @InjectModel(ManagerModel)
        private readonly managerModel: ReturnModelType<typeof ManagerModel>,
        private readonly passwordProtector: PasswordProtectorService
    ) {}

    async create(createAdminDto: CreateManagerDto) {
        createAdminDto.password = await this.passwordProtector.hash(
            createAdminDto.password
        );

        try {
            const user = await this.managerModel.create(CreateManagerDto);
            return this.managerModel.findById(user.id).exec();
        } catch (e) {
            throw new BadRequestException('User with this login exists');
        }
    }

    async get(limit: number, offset: number) {
        return {
            count: await this.managerModel.countDocuments().exec(),
            docs: await this.managerModel.find().skip(offset).limit(limit)
        };
    }

    async getByID(id: string) {
        const found = await this.managerModel.findById(id).exec();

        if (!found) {
            throw new NotFoundException();
        }

        return found;
    }

    async update(id: string, updateManagerDto: UpdateManagerDto) {
        const updated = this.managerModel
            .findByIdAndUpdate(id, updateManagerDto)
            .exec();

        if (!updated) {
            throw new NotFoundException();
        }

        return this.managerModel.findById(id).exec();
    }

    async delete(id: string) {
        const deleted = this.managerModel.findByIdAndDelete(id).exec();

        if (!deleted) {
            throw new NotFoundException();
        }

        return deleted;
    }
}
