import { Controller, Get, Res, HttpStatus, Post, Body, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

const tasks = {
  tasks : [
    {id: 1, taskName: 'Learn', taskDate: 'kakoeto-chislo'},
    {id: 2, taskName: 'Learn Angular', taskDate: 'kakoeto-c23hislo'},
  ],
  subtasks : [
    {id: 1, name: 'Learn Redux', date: 'kakoe12to-chislo'},
  ]
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getTasks')
  getTasks(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(tasks);
  }
  @Post('createTask')
  creteTask(@Body() body: any, @Res() res: Response) {
    tasks.tasks = [...tasks.tasks, body];
    // tasks.tasks.push(body);
    return res.status(HttpStatus.OK).json(tasks);
  }
  @Delete('delete/:id')
  deleteTask(@Param('id') id: string, @Res() res: Response) {
    tasks.tasks = tasks.tasks.filter((curr) => curr.id !== +id );
    console.log(tasks.tasks);
    return res.status(HttpStatus.OK).json(tasks);
  }
}
