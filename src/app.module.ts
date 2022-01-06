import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TeacherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
