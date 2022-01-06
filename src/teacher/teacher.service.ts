import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map, Observable } from 'rxjs';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Joke } from '../model/jokeModel';


@Injectable()
export class TeacherService {
  constructor(private readonly httpService: HttpService) { }

  async getJoke(): Promise<Joke> {
    const observable = await this.httpService.get('https://api.vvhan.com/api/en').pipe(map((res) => res.data));
    return await lastValueFrom(observable);
  }

  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
