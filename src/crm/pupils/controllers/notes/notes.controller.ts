import Pupil from '../../models/Pupil.model';
import { Body, Controller, Delete, Param, Post, Req } from '@nestjs/common';
import { NotesService } from '../../services/notes/notes.service';
import { path } from '../../path';

@Controller(path)
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Post(':id/Notes')
    async addNote(
        @Req() req,
        @Param('id') id: string,
        @Body('text') text: string
    ): Promise<Pupil> {
        return await this.notesService.addNote(id, text, req);
    }

    @Delete(':id/Notes/:note_number')
    async deleteNote(
        @Param('id') id: string,
        @Param('note_number') number: string
    ): Promise<Pupil> {
        return await this.notesService.deleteNote(id, Number(number));
    }
}