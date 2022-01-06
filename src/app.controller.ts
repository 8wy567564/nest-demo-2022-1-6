import { Body, Controller, Get, Headers, Header, HttpCode, Param, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModel } from './model/userModel';
import { TeacherService } from './teacher/teacher.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly teacherService: TeacherService) { }

  @Get()
  @Header('token', "1234")//response
  getHeader(@Headers("token") token: string) {
    return token;
  }

  @Get("user/query")
  getUserByQuery(@Query("id") id: number) {
    return this.teacherService.findOne(id);
  }

  // @Get(":id")
  // @HttpCode(201)
  // getUserByParam(@Param("id") id: string) {
  //   return id;
  // }

  @Get("user/http")
  getHttpResponse(@Res() res) {
    res.status(200).json({ user: "user" })
  }

  @Post()
  postUser(@Body() user: UserModel) {
    return user
  }
}
