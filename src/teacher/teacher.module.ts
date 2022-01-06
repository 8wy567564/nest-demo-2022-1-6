import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { NestModule, Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddlewareMiddleware } from 'src/middleware/logger-middleware.middleware';
import { HttpModule } from '@nestjs/axios';
// import { Global } from '@nestjs/common';

// @Global()
@Module({
  imports: [HttpModule],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService]
})
export class TeacherModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddlewareMiddleware)
      .forRoutes('teacher');
  }

}
